import os
import tempfile
import numpy as np
import scipy.signal
import scipy.linalg
import librosa
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="AI Pronunciation Analysis Backend")

# Enable CORS for frontend flexibility
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables for local whisper model (lazy loaded)
local_whisper_model = None

# Fallback norms if no custom speaker files are recorded (from phonetic literature)
MALE_NORMS = {
    "flat": {"cog": 6800, "f1": 300, "f2": 1900, "vot": 22},       # [z, c, s]
    "curled": {"cog": 3800, "f1": 320, "f2": 1350, "vot": 25},     # [zh, ch, sh]
    "aspiration": {"vot_aspirated": 110, "vot_unaspirated": 20}
}

FEMALE_NORMS = {
    "flat": {"cog": 7800, "f1": 320, "f2": 2100, "vot": 20},       # [z, c, s]
    "curled": {"cog": 4200, "f1": 350, "f2": 1500, "vot": 24},     # [zh, ch, sh]
    "aspiration": {"vot_aspirated": 120, "vot_unaspirated": 18}
}

def estimate_formants(y, sr, gender="Nữ"):
    """
    Estimate formants (F1, F2, F3) of a vowel segment using Linear Predictive Coding (LPC).
    Uses standard LPC root-finding method.
    """
    try:
        # Pre-emphasis filter to boost high frequencies
        y_pre = np.append(y[0], y[1:] - 0.97 * y[:-1])
        
        # We find the 50ms window with the highest energy (likely the core vowel)
        frame_len = int(0.05 * sr)
        if len(y_pre) < frame_len:
            return 350, 1500, 2500  # Fallback default values
            
        step = int(0.01 * sr)
        max_energy = 0
        best_frame = y_pre[:frame_len]
        
        for i in range(0, len(y_pre) - frame_len, step):
            frame = y_pre[i:i+frame_len]
            energy = np.sum(frame ** 2)
            if energy > max_energy:
                max_energy = energy
                best_frame = frame
                
        # Window the best frame
        windowed = best_frame * np.hamming(len(best_frame))
        
        # LPC order: 2 + sr / 1000. For 16kHz, order is 18.
        lpc_order = 2 + int(sr / 1000)
        
        # Calculate LPC coefficients using autocorrelation
        r = np.correlate(windowed, windowed, mode='full')
        r = r[len(windowed)-1 : len(windowed) - 1 + lpc_order + 1]
        
        # Solve Yule-Walker equations via Toeplitz matrix solver
        a = scipy.linalg.solve_toeplitz((r[:-1], r[:-1]), r[1:])
        lpc_coefs = np.concatenate(([1.0], -a))
        
        # Find roots of the LPC polynomial
        roots = np.roots(lpc_coefs)
        roots = [r for r in roots if np.imag(r) >= 0]
        
        # Calculate formant frequencies
        formants = []
        for r_val in roots:
            freq = np.arctan2(np.imag(r_val), np.real(r_val)) * sr / (2 * np.pi)
            # Bandwidth check (magnitude of root close to unit circle)
            bandwidth = -0.5 * (sr / (2 * np.pi)) * np.log(np.abs(r_val))
            if 200 < freq < 3500 and bandwidth < 500:
                formants.append(freq)
                
        formants = sorted(formants)
        
        # Extract F1 and F2, providing reasonable defaults if missing
        f1 = formants[0] if len(formants) > 0 else (350 if gender == "Nữ" else 300)
        f2 = formants[1] if len(formants) > 1 else (1700 if gender == "Nữ" else 1500)
        f3 = formants[2] if len(formants) > 2 else (2700 if gender == "Nữ" else 2500)
        
        return int(f1), int(f2), int(f3)
    except Exception as e:
        print(f"Error estimating formants: {e}")
        # Return fallback values
        if gender == "Nam":
            return 300, 1500, 2400
        return 350, 1800, 2700

def run_whisper_transcription(file_path):
    """
    Perform Speech Recognition using OpenAI API (if key is set) or Local Whisper (as fallback).
    """
    global local_whisper_model
    
    # 1. Try OpenAI API if Key is present
    api_key = os.environ.get("OPENAI_API_KEY")
    if api_key:
        try:
            from openai import OpenAI
            client = OpenAI(api_key=api_key)
            with open(file_path, "rb") as audio_file:
                transcription = client.audio.transcriptions.create(
                    model="whisper-1", 
                    file=audio_file,
                    language="zh"
                )
            return transcription.text
        except Exception as e:
            print(f"Cloud OpenAI API failed: {e}. Falling back to local Whisper.")
            
    # 2. Local Whisper execution
    try:
        if local_whisper_model is None:
            import whisper
            print("Loading local Whisper 'tiny' model...")
            local_whisper_model = whisper.load_model("tiny")
        
        result = local_whisper_model.transcribe(file_path, language="zh")
        return result.get("text", "")
    except Exception as e:
        print(f"Local Whisper failed: {e}")
        return ""

@app.post("/api/analyze")
async def analyze_audio(
    file: UploadFile = File(...),
    wordId: str = Form(...),
    character: str = Form(...),
    pinyin: str = Form(...),
    type: str = Form(...),  # 'flat' or 'curled'
    highlight: str = Form(...),  # 'z', 'zh', 'c', 'ch', 's', 'sh', or 'zh-sh'
    gender: str = Form("Nữ")  # 'Nam' or 'Nữ'
):
    # Create a temporary file to save the uploaded WAV file
    temp_dir = tempfile.gettempdir()
    temp_wav_path = os.path.join(temp_dir, f"recording_{wordId}.wav")
    
    try:
        # Save uploaded file
        with open(temp_wav_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
            
        # 1. Run Whisper Speech Recognition
        transcript = run_whisper_transcription(temp_wav_path)
        print(f"Whisper transcript for {character} ({pinyin}): '{transcript}'")
        
        # 2. Load Audio with Librosa for DSP Analysis
        y, sr = librosa.load(temp_wav_path, sr=16000)
        
        # 3. Calculate Zero Crossing Rate (ZCR) and energy to find friction section
        zcr = librosa.feature.zero_crossing_rate(y, frame_length=256, hop_length=128)[0]
        rmse = librosa.feature.rms(y=y, frame_length=256, hop_length=128)[0]
        
        # Find active sound frames
        active_frames = np.where(rmse > np.max(rmse) * 0.05)[0]
        if len(active_frames) == 0:
            active_frames = np.arange(len(rmse))
            
        # Spectral Centroid (COG) calculation
        centroids = librosa.feature.spectral_centroid(y=y, sr=sr, n_fft=512, hop_length=128)[0]
        
        # Focus COG on frames where Zero Crossing Rate is high (fricative component)
        fricative_frames = [idx for idx in active_frames if zcr[idx] > 0.15]
        if fricative_frames:
            cog = int(np.mean(centroids[fricative_frames]))
        else:
            cog = int(np.mean(centroids[active_frames]))
            
        # 4. Formants estimation
        f1, f2, f3 = estimate_formants(y, sr, gender)
        
        # 5. VOT Estimation (Voice Onset Time)
        # Find index where energy first rises
        onset_idx = np.where(rmse > np.max(rmse) * 0.04)[0]
        voicing_idx = np.where((rmse > np.max(rmse) * 0.15) & (zcr < 0.15))[0]
        
        if len(onset_idx) > 0 and len(voicing_idx) > 0 and voicing_idx[0] > onset_idx[0]:
            vot = int((voicing_idx[0] - onset_idx[0]) * (128 / sr) * 1000)
        else:
            vot = 25  # standard unaspirated default
            
        # 6. Check if target phoneme matches whisper transcription
        # Since Whisper is trained on natural speech, it is highly sensitive to flat/curled swaps.
        is_text_match = character in transcript
        
        # In case student swapped z/zh, e.g. for "在" (zài), they said "債" (zhài)
        # Whisper will transcribe "債" or "zhai", so character "在" won't match.
        
        # 7. Acoustic compliance check
        norms = FEMALE_NORMS if gender == "Nữ" else MALE_NORMS
        
        is_acoustic_valid = True
        feedback_notes = []
        
        # Core checks for flat [z, c, s] vs curled [zh, ch, sh]
        if type == "flat":
            # Flat sounds should have high COG
            target_cog = norms["flat"]["cog"]
            cog_diff = cog - target_cog
            if cog < 4800:
                is_acoustic_valid = False
                feedback_notes.append("Lưỡi của bạn quá lùi về sau. Hãy duỗi thẳng đầu lưỡi chạm mặt sau răng cửa dưới để tạo luồng hơi ma sát dẹt chuẩn xác (平舌音).")
            else:
                feedback_notes.append("Trọng tâm tần số tốt, luồng hơi ma sát chuẩn dẹt.")
        else:
            # Curled sounds should have lower COG
            target_cog = norms["curled"]["cog"]
            if cog > 5800:
                is_acoustic_valid = False
                feedback_notes.append("Lưỡi của bạn quá phẳng và tiến ra trước. Hãy uốn đầu lưỡi cong lên gần vòm họng trên để tạo âm cuốn lưỡi trầm ấm (捲舌音).")
            else:
                feedback_notes.append("Tốt! Âm cuốn lưỡi có độ cộng hưởng vòm họng chuẩn xác.")
                
        # Aspiration check for [c, ch]
        is_aspirated = highlight in ["c", "ch"]
        if is_aspirated:
            if vot < 60:
                is_acoustic_valid = False
                feedback_notes.append("Hơi ra quá yếu. Đây là âm bật hơi (送氣音), hãy nén hơi sau đầu lưỡi và bật mạnh luồng khí ra ngoài.")
            else:
                feedback_notes.append("Độ bật hơi rất tốt, luồng khí phóng ra mạnh mẽ.")
        else:
            # Unaspirated [z, zh]
            if vot > 55:
                is_acoustic_valid = False
                feedback_notes.append("Âm bị rò rỉ hơi nhiều. Đây là âm không bật hơi, hãy chặn hơi và rung dây thanh âm nhanh hơn.")
                
        # 8. Scoring algorithm based on proximity to target norms
        # Calculate standard deviation score
        cog_score = max(50, 100 - abs(cog - target_cog) / 60)
        
        if is_aspirated:
            target_vot = norms["aspiration"]["vot_aspirated"]
            vot_score = max(50, 100 - abs(vot - target_vot) / 2)
        else:
            target_vot = norms["aspiration"]["vot_unaspirated"]
            vot_score = max(50, 100 - abs(vot - target_vot) / 0.5)
            
        final_score = int(cog_score * 0.5 + vot_score * 0.5)
        
        # Penalize if Whisper transcription doesn't match
        if not is_text_match:
            final_score = max(45, int(final_score * 0.8))
            feedback_notes.insert(0, f"AI nhận diện được từ: \"{transcript if transcript else 'Không rõ'}\" (Nhầm lẫn phụ âm đầu).")
        else:
            final_score = min(100, int(final_score * 1.05))
            feedback_notes.insert(0, "AI nhận diện chính xác chữ Hán mục tiêu.")
            
        # Clean final score bounds
        final_score = max(40, min(100, final_score))
        
        # Make a combined feedback string
        feedback_text = " ".join(feedback_notes)
        
        return {
            "score": final_score,
            "isMatch": is_text_match,
            "recognizedText": transcript,
            "cog": cog,
            "vot": vot,
            "f1": f1,
            "f2": f2,
            "f3": f3,
            "diagnosticCode": "NORMAL" if is_acoustic_valid else "INVALID",
            "feedback": feedback_text,
            "engine": "OpenAI Whisper Cloud" if api_key else "Local Whisper Tiny + Librosa"
        }
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Acoustic analysis failed: {str(e)}")
        
    finally:
        # Clean up temporary WAV file
        if os.path.exists(temp_wav_path):
            try:
                os.remove(temp_wav_path)
            except Exception:
                pass

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
