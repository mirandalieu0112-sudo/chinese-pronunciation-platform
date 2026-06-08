// 19 Contextual Cloze Listening questions for Sibilants (z, c, s) vs Retroflexes (zh, ch, sh)
const clozeData = [
    {
        id: "cloze_1",
        mode: "claw",
        audioText: "他到底有沒有債？",
        pinyinTarget: "zhài",
        sentencePattern: "他到底有沒有 [ ___ ]？",
        optionA: { char: "在", pinyin: "zài", translation: { zh: "在 (存在/在此)", en: "present / here", vi: "có mặt / ở đây" } },
        optionB: { char: "債", pinyin: "zhài", translation: { zh: "債 (債務)", en: "debt", vi: "nợ nần" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「在」，句子變成「他到底有沒有在？」（意指：他到底在不在場？）",
            en: "❌ You chose '在' (zài). Sentence: 'Is he actually here?'",
            vi: "❌ Bạn chọn '在' (zài). Câu thành: 'Anh ấy rốt cuộc có ở đây không?'"
        },
        correctFeedback: {
            zh: "⭕ 正確答案「債」，句子為「他到底有沒有債？」（意指：他到底有沒有欠錢？）",
            en: "⭕ Correct: '債' (zhài). Sentence: 'Does he actually have any debt?'",
            vi: "⭕ Đúng: '債' (zhài). Câu thành: 'Anh ấy rốt cuộc có nợ nần gì không?'"
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「在 (zài)」是舌尖前音（平舌音），舌尖頂住下齒背；「債 (zhài)」是舌尖後音（捲舌音），舌尖往後捲起。",
            en: "💡 Pronunciation Tip: 'zài' is a flat sibilant; 'zhài' is a curled retroflex.",
            vi: "💡 Gợi ý phát âm: 'zài' là âm đầu lưỡi trước (lưỡi thẳng chạm răng dưới); 'zhài' là âm đầu lưỡi sau (uốn đầu lưỡi lên)."
        }
    },
    {
        id: "cloze_2",
        mode: "typewriter",
        audioText: "每個人都有自己的志向。",
        pinyinTarget: "zhì",
        sentencePattern: "每個人都有自己的 [ ___ ] 向。",
        optionA: { char: "自", pinyin: "zì", translation: { zh: "自 (自己)", en: "self", vi: "tự mình" } },
        optionB: { char: "志", pinyin: "zhì", translation: { zh: "志 (志向)", en: "ambition / will", vi: "chí hướng" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「自」，「自向」不是一個正確的中文詞彙。",
            en: "❌ You chose '自' (zì). '自向' is not a valid word.",
            vi: "❌ Bạn chọn '自' (zì). '自向' không phải là từ vựng tiếng Trung đúng."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「志」，「志向」意指心之所向、未來的目標與理想。",
            en: "⭕ Correct: '志' (zhì). '志向' means ambition or aspiration.",
            vi: "⭕ Đúng: '志' (zhì). '志向' nghĩa là chí hướng, hoài bão."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「自 (zì)」平舌，氣流受阻發出；「志 (zhì)」捲舌，舌尖頂住硬腭前部。",
            en: "💡 Pronunciation Tip: 'zì' is flat tongue; 'zhì' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'zì' phát âm thẳng lưỡi; 'zhì' phát âm uốn lưỡi."
        }
    },
    {
        id: "cloze_3",
        mode: "claw",
        audioText: "我們家今年養了一頭豬。",
        pinyinTarget: "zhū",
        sentencePattern: "我們家今年養了一頭 [ ___ ]。",
        optionA: { char: "租", pinyin: "zū", translation: { zh: "租 (租賃)", en: "rent", vi: "thuê" } },
        optionB: { char: "豬", pinyin: "zhū", translation: { zh: "豬 (家畜)", en: "pig", vi: "con heo" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「租」，量詞「一頭」不能用來修飾「租」。",
            en: "❌ You chose '租' (zū). '一頭' cannot measure rent.",
            vi: "❌ Bạn chọn '租' (zū). Lượng từ '一頭' không dùng cho việc thuê mướn."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「豬」，「一頭豬」是家畜的標準量詞搭配。",
            en: "⭕ Correct: '豬' (zhū). '一頭豬' means a pig.",
            vi: "⭕ Đúng: '豬' (zhū). '一頭豬' nghĩa là một con heo."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「租 (zū)」平舌音，嘴角向兩邊展平；「豬 (zhū)」捲舌音，雙唇收圓。",
            en: "💡 Pronunciation Tip: 'zū' is flat tongue; 'zhū' is curled tongue with rounded lips.",
            vi: "💡 Gợi ý phát âm: 'zū' lưỡi thẳng dẹt môi; 'zhū' uốn lưỡi và tròn môi."
        }
    },
    {
        id: "cloze_4",
        mode: "typewriter",
        audioText: "這根繩子看起來很粗。",
        pinyinTarget: "cū",
        sentencePattern: "這根繩子看起來很 [ ___ ]。",
        optionA: { char: "粗", pinyin: "cū", translation: { zh: "粗 (寬大/厚重)", en: "thick / coarse", vi: "to / dày / thô" }, correct: true },
        optionB: { char: "出", pinyin: "chū", translation: { zh: "出 (出去/顯露)", en: "out / exit", vi: "ra / xuất" } },
        incorrectFeedback: {
            zh: "❌ 您選了「出」，「很出」語意不完整。",
            en: "❌ You chose '出' (chū). '很出' is grammatically incomplete.",
            vi: "❌ Bạn chọn '出' (chū). '很出' không mang ý nghĩa hoàn chỉnh ở đây."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「粗」，形容繩子直徑大，與「細」相對。",
            en: "⭕ Correct: '粗' (cū). '粗' means thick, opposite of thin.",
            vi: "⭕ Đúng: '粗' (cū). '粗' nghĩa là to, thô (ngược nghĩa với細 - mảnh/nhỏ)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「粗 (cū)」是平舌送氣音，舌尖阻礙氣流後快速送氣；「出 (chū)」是捲舌送氣音。",
            en: "💡 Pronunciation Tip: 'cū' is flat aspirated; 'chū' is curled aspirated.",
            vi: "💡 Gợi ý phát âm: 'cū' là âm thẳng lưỡi bật hơi; 'chū' là âm uốn lưỡi bật hơi."
        }
    },
    {
        id: "cloze_5",
        mode: "claw",
        audioText: "他非常喜歡唐代的詩。",
        pinyinTarget: "shī",
        sentencePattern: "他非常喜歡唐代的 [ ___ ]。",
        optionA: { char: "司", pinyin: "sī", translation: { zh: "司 (官署/掌管)", en: "department", vi: "ty / sở" } },
        optionB: { char: "詩", pinyin: "shī", translation: { zh: "詩 (文學體裁)", en: "poetry / poem", vi: "thơ ca" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「司」，「唐代的司」語意不通（「司」通常不單獨作名詞使用）。",
            en: "❌ You chose '司' (sī). '唐代的司' does not make sense here.",
            vi: "❌ Bạn chọn '司' (sī). '唐代的司' không có nghĩa hợp ngữ cảnh."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「詩」，「唐代的詩」即著名的唐詩。",
            en: "⭕ Correct: '詩' (shī). It refers to Tang Dynasty poetry.",
            vi: "⭕ Đúng: '詩' (shī). Nghĩa là thơ Đường (thơ ca thời nhà Đường)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「司 (sī)」平舌擦音，舌尖靠近上齒齦發音；「詩 (shī)」捲舌擦音，氣流從舌面與硬腭通道摩擦而出。",
            en: "💡 Pronunciation Tip: 'sī' is flat fricative; 'shī' is curled fricative.",
            vi: "💡 Gợi ý phát âm: 'sī' thẳng lưỡi phát sát; 'shī' uốn lưỡi phát sát."
        }
    },
    {
        id: "cloze_6",
        mode: "typewriter",
        audioText: "這是一座很有名的山。",
        pinyinTarget: "shān",
        sentencePattern: "這是一座很有名的 [ ___ ]。",
        optionA: { char: "三", pinyin: "sān", translation: { zh: "三 (數字)", en: "three", vi: "số ba" } },
        optionB: { char: "山", pinyin: "shān", translation: { zh: "山 (自然地理)", en: "mountain", vi: "ngọn núi" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「三」，量詞「一座」通常用來修飾建築物或山嶽，不用於數字「三」。",
            en: "❌ You chose '三' (sān). '一座' cannot measure the number three.",
            vi: "❌ Bạn chọn '三' (sān). Lượng từ '一座' không dùng để lượng hóa số 3."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「山」，「一座山」是標準的地理名詞搭配。",
            en: "⭕ Correct: '山' (shān). It refers to a mountain.",
            vi: "⭕ Đúng: '山' (shān). Nghĩa là ngọn núi ('一座山' - một ngọn núi)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「三 (sān)」平舌音，舌尖抵住下齒背；「山 (shān)」捲舌音，發音時舌面兩側稍微上捲靠近硬腭。",
            en: "💡 Pronunciation Tip: 'sān' is flat; 'shān' is curled.",
            vi: "💡 Gợi ý phát âm: 'sān' thẳng lưỡi; 'shān' uốn lưỡi."
        }
    },
    {
        id: "cloze_7",
        mode: "claw",
        audioText: "小狗在陽台上的綠草地上玩耍。",
        pinyinTarget: "cǎo",
        sentencePattern: "小狗在陽台上的綠 [ ___ ] 地上玩耍。",
        optionA: { char: "草", pinyin: "cǎo", translation: { zh: "草 (植物)", en: "grass", vi: "cỏ" }, correct: true },
        optionB: { char: "吵", pinyin: "chǎo", translation: { zh: "吵 (喧鬧)", en: "noisy", vi: "ồn ào" } },
        incorrectFeedback: {
            zh: "❌ 您選了「吵」，「綠吵地」是錯誤組詞。",
            en: "❌ You chose '吵' (chǎo). '綠吵地' is an invalid phrase.",
            vi: "❌ Bạn chọn '吵' (chǎo). '綠吵地' là cụm từ vô nghĩa."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「草」，「綠草地」指鋪滿青草的地面。",
            en: "⭕ Correct: '草' (cǎo). '綠草地' means green lawn/grassland.",
            vi: "⭕ Đúng: '草' (cǎo). '綠草地' nghĩa là bãi cỏ xanh."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「草 (cǎo)」平舌送氣音；「吵 (chǎo)」捲舌送氣音。兩者均需注意送氣的力度。",
            en: "💡 Pronunciation Tip: 'cǎo' is flat aspirated; 'chǎo' is curled aspirated.",
            vi: "💡 Gợi ý phát âm: 'cǎo' thẳng lưỡi bật hơi; 'chǎo' uốn lưỡi bật hơi."
        }
    },
    {
        id: "cloze_8",
        mode: "typewriter",
        audioText: "玫瑰花身上長了許多的刺。",
        pinyinTarget: "cì",
        sentencePattern: "玫瑰花身上長了許多的 [ ___ ]。",
        optionA: { char: "刺", pinyin: "cì", translation: { zh: "刺 (尖銳物)", en: "thorn / prickle", vi: "gai nhọn" }, correct: true },
        optionB: { char: "翅", pinyin: "chì", translation: { zh: "翅 (翅膀)", en: "wing", vi: "cánh" } },
        incorrectFeedback: {
            zh: "❌ 您選了「翅」，「長了許多翅」通常用來形容鳥類長羽翼，玫瑰花不會長翅膀。",
            en: "❌ You chose '翅' (chì). Roses do not grow wings.",
            vi: "❌ Bạn chọn '翅' (chì). Hoa hồng không thể mọc cánh."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「刺」，玫瑰花梗上的尖刺是防禦機制。",
            en: "⭕ Correct: '刺' (cì). Roses have thorns.",
            vi: "⭕ Đúng: '刺' (cì). Nghĩa là gai nhọn của hoa hồng."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「刺 (cì)」平舌送氣；「翅 (chì)」捲舌送氣。注意平捲舌的切換。",
            en: "💡 Pronunciation Tip: 'cì' is flat aspirated; 'chì' is curled aspirated.",
            vi: "💡 Gợi ý phát âm: 'cì' thẳng lưỡi bật hơi; 'chì' uốn lưỡi bật hơi."
        }
    },
    {
        id: "cloze_9",
        mode: "claw",
        audioText: "你要出門找工作了嗎？",
        pinyinTarget: "zhǎo",
        sentencePattern: "你要出門 [ ___ ] 工作了嗎？",
        optionA: { char: "早", pinyin: "zǎo", translation: { zh: "早 (清晨/提早)", en: "early", vi: "sớm" } },
        optionB: { char: "找", pinyin: "zhǎo", translation: { zh: "找 (尋找)", en: "look for / seek", vi: "tìm kiếm" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「早」，「早工作」在此語境中語法不通暢。",
            en: "❌ You chose '早' (zǎo). '早工作' does not fit grammatically here.",
            vi: "❌ Bạn chọn '早' (zǎo). '早工作' không phù hợp ngữ pháp ở câu này."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「找」，「找工作」表示謀求職業。",
            en: "⭕ Correct: '找' (zhǎo). '找工作' means job hunting.",
            vi: "⭕ Đúng: '找' (zhǎo). '找工作' nghĩa là tìm việc làm."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「早 (zǎo)」平舌音；「找 (zhǎo)」捲舌音。注意聲母的發音部位區別。",
            en: "💡 Pronunciation Tip: 'zǎo' is flat tongue; 'zhǎo' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'zǎo' thẳng lưỡi; 'zhǎo' uốn lưỡi."
        }
    },
    {
        id: "cloze_10",
        mode: "typewriter",
        audioText: "桌上放著一張乾淨的紙。",
        pinyinTarget: "zhǐ",
        sentencePattern: "桌上放著一張乾淨的 [ ___ ]。",
        optionA: { char: "死", pinyin: "sǐ", translation: { zh: "死 (死亡)", en: "death / die", vi: "chết" } },
        optionB: { char: "紙", pinyin: "zhǐ", translation: { zh: "紙 (紙張)", en: "paper", vi: "tờ giấy" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「死」，量詞「一張」不能與代表生理狀態結束的「死」搭配。",
            en: "❌ You chose '死' (sǐ). '一張' cannot measure death.",
            vi: "❌ Bạn chọn '死' (sǐ). Lượng từ '一張' không thể đi với hành động 'chết'."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「紙」，「一張紙」指白紙或寫字紙。",
            en: "⭕ Correct: '紙' (zhǐ). '一張紙' means a piece of paper.",
            vi: "⭕ Đúng: '紙' (zhǐ). Nghĩa là tờ giấy ('一張紙' - một tờ giấy)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「死 (sǐ)」平舌音，舌尖抵下齒背；「紙 (zhǐ)」捲舌音，發音時氣流在舌尖與硬腭間受阻。",
            en: "💡 Pronunciation Tip: 'sǐ' is flat tongue; 'zhǐ' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sǐ' thẳng lưỡi; 'zhǐ' uốn lưỡi."
        }
    },
    {
        id: "cloze_11",
        mode: "claw",
        audioText: "圖書館裡有很多好看的書。",
        pinyinTarget: "shū",
        sentencePattern: "圖書館裡有很多好看的 [ ___ ]。",
        optionA: { char: "蘇", pinyin: "sū", translation: { zh: "蘇 (江蘇/甦醒)", en: "Su (place name)", vi: "Tô (họ/tên)" } },
        optionB: { char: "書", pinyin: "shū", translation: { zh: "書 (書籍)", en: "book", vi: "sách" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「蘇」，圖書館主要存放書籍，而非人名或地名「蘇」。",
            en: "❌ You chose '蘇' (sū). Libraries store books, not names.",
            vi: "❌ Bạn chọn '蘇' (sū). Thư viện chứa sách chứ không chứa 'Tô'."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「書」，「看書」與「圖書館」是經典語境搭配。",
            en: "⭕ Correct: '書' (shū). Libraries contain books.",
            vi: "⭕ Đúng: '書' (shū). Nghĩa là sách (thư viện chứa nhiều sách hay)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「蘇 (sū)」平舌音；「書 (shū)」捲舌音。注意氣流流出的摩擦位置。",
            en: "💡 Pronunciation Tip: 'sū' is flat tongue; 'shū' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sū' thẳng lưỡi; 'shū' uốn lưỡi."
        }
    },
    {
        id: "cloze_12",
        mode: "typewriter",
        audioText: "他的名字寫錯了一個字。",
        pinyinTarget: "zì",
        sentencePattern: "他的名字寫錯了一個 [ ___ ]。",
        optionA: { char: "字", pinyin: "zì", translation: { zh: "字 (漢字/字符)", en: "character / word", vi: "chữ / ký tự" }, correct: true },
        optionB: { char: "治", pinyin: "zhì", translation: { zh: "治 (治理/政治)", en: "govern", vi: "trị / cai trị" } },
        incorrectFeedback: {
            zh: "❌ 您選了「治」，「名字寫錯一個治」不合語法規範。",
            en: "❌ You chose '治' (zhì). Names consist of characters (字), not governance (治).",
            vi: "❌ Bạn chọn '治' (zhì). Tên người gồm các ký tự chữ (字) chứ không phải từ cai trị (治)."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「字」，代表姓名中的某一個漢字字符。",
            en: "⭕ Correct: '字' (zì). It means character.",
            vi: "⭕ Đúng: '字' (zì). Nghĩa là chữ, chữ viết (viết sai một chữ trong tên)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「字 (zì)」平舌音，注意發音時不要捲舌；「治 (zhì)」捲舌音，舌尖阻礙空氣後釋放。",
            en: "💡 Pronunciation Tip: 'zì' is flat tongue; 'zhì' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'zì' thẳng lưỡi; 'zhì' uốn lưỡi."
        }
    },
    {
        id: "cloze_13",
        mode: "claw",
        audioText: "昨晚晾在陽台的衣服還是濕的。",
        pinyinTarget: "shī",
        sentencePattern: "昨晚晾在陽台的衣服還是 [ ___ ] 的。",
        optionA: { char: "私", pinyin: "sī", translation: { zh: "私 (私有/個人)", en: "private", vi: "riêng tư" } },
        optionB: { char: "濕", pinyin: "shī", translation: { zh: "濕 (潮濕/含水)", en: "wet / damp", vi: "ướt / ẩm" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「私」，「衣服還是私的」在表示乾濕的語境中沒有意義。",
            en: "❌ You chose '私' (sī). '私的' (private) does not make sense here.",
            vi: "❌ Bạn chọn '私' (sī). Quần áo phơi không thể 'riêng tư' trong ngữ cảnh này."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「濕」，說明衣服還沒乾，仍含有水分。",
            en: "⭕ Correct: '濕' (shī). The clothes are still wet.",
            vi: "⭕ Đúng: '濕' (shī). Nghĩa là ướt (quần áo phơi vẫn còn ướt)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「私 (sī)」平舌擦音；「濕 (shī)」捲舌擦音。發音時注意舌尖的捲起程度。",
            en: "💡 Pronunciation Tip: 'sī' is flat tongue; 'shī' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sī' thẳng lưỡi; 'shī' uốn lưỡi."
        }
    },
    {
        id: "cloze_14",
        mode: "typewriter",
        audioText: "誰是這件事的主謀？",
        pinyinTarget: "zhǔ",
        sentencePattern: "誰是這件事的 [ ___ ] 謀？",
        optionA: { char: "阻", pinyin: "zǔ", translation: { zh: "阻 (阻擋)", en: "block / obstruct", vi: "ngăn cản" } },
        optionB: { char: "主", pinyin: "zhǔ", translation: { zh: "主 (主要/首要)", en: "chief / main", vi: "chủ / chính" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「阻」，「阻謀」並非合規的中文詞彙。",
            en: "❌ You chose '阻' (zǔ). '阻謀' is not a valid Chinese word.",
            vi: "❌ Bạn chọn '阻' (zǔ). '阻謀' không phải là từ vựng tiếng Trung đúng."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「主」，「主謀」指策劃某件壞事的主要策劃者。",
            en: "⭕ Correct: '主' (zhǔ). '主謀' means mastermind or ringleader.",
            vi: "⭕ Đúng: '主' (zhǔ). '主謀' nghĩa là kẻ chủ mưu."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「阻 (zǔ)」平舌音，無捲舌動作；「主 (zhǔ)」捲舌塞擦音，注意聲母發音的捲舌位置。",
            en: "💡 Pronunciation Tip: 'zǔ' is flat; 'zhǔ' is curled.",
            vi: "💡 Gợi ý phát âm: 'zǔ' thẳng lưỡi; 'zhǔ' uốn lưỡi."
        }
    },
    {
        id: "cloze_15",
        mode: "claw",
        audioText: "外面下大雨了，你帶傘了嗎？",
        pinyinTarget: "sǎn",
        sentencePattern: "外面下大雨了，你帶 [ ___ ] 了嗎？",
        optionA: { char: "傘", pinyin: "sǎn", translation: { zh: "傘 (雨具)", en: "umbrella", vi: "ô / dù" }, correct: true },
        optionB: { char: "閃", pinyin: "shǎn", translation: { zh: "閃 (閃躲/閃電)", en: "flash / dodge", vi: "tốc biến / né" } },
        incorrectFeedback: {
            zh: "❌ 您選了「閃」，「帶閃」在中文中多為電玩遊戲術語（意指帶閃現技能），在下雨語境中不適用。",
            en: "❌ You chose '閃' (shǎn). '閃' (flash) is gaming slang, not for rain.",
            vi: "❌ Bạn chọn '閃' (shǎn). '閃' (tốc biến) là thuật ngữ chơi game, không dùng cho trời mưa."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「傘」，「傘」是下雨時的專用防雨工具。",
            en: "⭕ Correct: '傘' (sǎn). You need an umbrella when it rains.",
            vi: "⭕ Đúng: '傘' (sǎn). Nghĩa là chiếc ô/dù để che mưa."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「傘 (sǎn)」平舌音，發音時舌面展平；「閃 (shǎn)」捲舌音，舌尖翹起靠近硬腭。",
            en: "💡 Pronunciation Tip: 'sǎn' is flat tongue; 'shǎn' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sǎn' thẳng lưỡi; 'shǎn' uốn lưỡi."
        }
    },
    {
        id: "cloze_16",
        mode: "typewriter",
        audioText: "他是一位老僧。",
        pinyinTarget: "sēng",
        sentencePattern: "他是一位老 [ ___ ]。",
        optionA: { char: "僧", pinyin: "sēng", translation: { zh: "僧 (出家人)", en: "monk", vi: "nhà sư" }, correct: true },
        optionB: { char: "生", pinyin: "shēng", translation: { zh: "生 (讀書人/演員)", en: "scholar / actor", vi: "học sinh / vai sinh" } },
        incorrectFeedback: {
            zh: "❌ 您選了「生」，「老生」指平劇中的老年男性角色或年老讀書人，與通常意指年老僧侶的「老僧」發音與語境相差甚遠。",
            en: "❌ You chose '生' (shēng). '老生' is an old scholar/actor, not a monk.",
            vi: "❌ Bạn chọn '生' (shēng). '老生' chỉ vai diễn ông lão hoặc nhà nho già, không phải nhà sư."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「僧」，「老僧」指年老的佛教出家僧侶。",
            en: "⭕ Correct: '僧' (sēng). It means an old Buddhist monk.",
            vi: "⭕ Đúng: '僧' (sēng). Nghĩa là nhà sư già (lão tăng)."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「僧 (sēng)」平舌音，舌尖中線對準上下齒背；「生 (shēng)」捲舌音，舌尖往上腭捲起。",
            en: "💡 Pronunciation Tip: 'sēng' is flat tongue; 'shēng' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sēng' thẳng lưỡi; 'shēng' uốn lưỡi."
        }
    },
    {
        id: "cloze_17",
        mode: "claw",
        audioText: "他準備要上訴了。",
        pinyinTarget: "sù",
        sentencePattern: "他準備要上 [ ___ ] 了。",
        optionA: { char: "訴", pinyin: "sù", translation: { zh: "訴 (起訴/訴訟)", en: "appeal / sue", vi: "kháng cáo / kiện" }, correct: true },
        optionB: { char: "樹", pinyin: "shù", translation: { zh: "樹 (植物)", en: "tree", vi: "cây cối" } },
        incorrectFeedback: {
            zh: "❌ 您選了「樹」，「上樹」意指爬上樹木。雖然文法正確，但通常法律或社會情境會說「上訴」（向法院上訴）。",
            en: "❌ You chose '樹' (shù). '上樹' means climbing a tree, which is unlikely in this context.",
            vi: "❌ Bạn chọn '樹' (shù). '上樹' nghĩa là trèo lên cây, không hợp ngữ cảnh xã hội thông thường."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「訴」，「上訴」指不服初審判決，向高一級法院請求重審。",
            en: "⭕ Correct: '訴' (sù). '上訴' means to appeal a court decision.",
            vi: "⭕ Đúng: '訴' (sù). '上訴' nghĩa là kháng cáo hình sự/dân sự lên tòa án cấp cao hơn."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「訴 (sù)」平舌音，口腔氣流阻礙點在齒面；「樹 (shù)」捲舌音，氣流阻礙點在硬腭前部。",
            en: "💡 Pronunciation Tip: 'sù' is flat tongue; 'shù' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sù' thẳng lưỡi; 'shù' uốn lưỡi."
        }
    },
    {
        id: "cloze_18",
        mode: "typewriter",
        audioText: "今年這裡的雨水很多。",
        pinyinTarget: "shuǐ",
        sentencePattern: "今年這裡的雨 [ ___ ] 很多。",
        optionA: { char: "歲", pinyin: "suì", translation: { zh: "歲 (年齡單位)", en: "years of age", vi: "tuổi" } },
        optionB: { char: "水", pinyin: "shuǐ", translation: { zh: "水 (液體)", en: "water / rain", vi: "nước" }, correct: true },
        incorrectFeedback: {
            zh: "❌ 您選了「歲」，「雨歲」是無效詞彙，不合邏輯。",
            en: "❌ You chose '歲' (suì). '雨歲' is nonsensical.",
            vi: "❌ Bạn chọn '歲' (suì). '雨歲' là cụm từ sai, vô nghĩa."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「水」，「雨水」指降雨產生的水分，形容降雨量充足。",
            en: "⭕ Correct: '水' (shuǐ). '雨水' means rainwater.",
            vi: "⭕ Đúng: '水' (shuǐ). '雨水' nghĩa là nước mưa."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「歲 (suì)」平舌音，舌尖不要往後捲；「水 (shuǐ)」捲舌音，舌尖往硬腭捲起並圓唇。",
            en: "💡 Pronunciation Tip: 'suì' is flat tongue; 'shuǐ' is curled tongue with rounded lips.",
            vi: "💡 Gợi ý phát âm: 'suì' thẳng lưỡi; 'shuǐ' uốn lưỡi tròn môi."
        }
    },
    {
        id: "cloze_19",
        mode: "claw",
        audioText: "他說他會死守在這裡。",
        pinyinTarget: "sǐ",
        sentencePattern: "他說他會 [ ___ ] 守在這裡。",
        optionA: { char: "死", pinyin: "sǐ", translation: { zh: "死 (拼死/堅決)", en: "defend to death / firmly", vi: "liều chết / kiên quyết" }, correct: true },
        optionB: { char: "是", pinyin: "shì", translation: { zh: "是 (確認/判斷詞)", en: "is / are / yes", vi: "là / vâng" } },
        incorrectFeedback: {
            zh: "❌ 您選了「是」，「會是守在這裡」句型結構不自然，不合乎中文表達習慣。",
            en: "❌ You chose '是' (shì). '會是守' is grammatically unnatural.",
            vi: "❌ Bạn chọn '是' (shì). Cấu trúc '會是守' nghe rất gượng gạo, không tự nhiên."
        },
        correctFeedback: {
            zh: "⭕ 正確答案「死」，「死守」指盡最大努力、拼死防守或堅持防地。",
            en: "⭕ Correct: '死' (sǐ). '死守' means to defend to the death or hold fast.",
            vi: "⭕ Đúng: '死' (sǐ). '死守' nghĩa là liều chết bảo vệ/canh giữ."
        },
        pronunciationTip: {
            zh: "💡 辨音提示：「死 (sǐ)」平舌音；「是 (shì)」捲舌音。平捲舌的聲調與咬字都要非常精確。",
            en: "💡 Pronunciation Tip: 'sǐ' is flat tongue; 'shì' is curled tongue.",
            vi: "💡 Gợi ý phát âm: 'sǐ' thẳng lưỡi; 'shì' uốn lưỡi."
        }
    }
];
