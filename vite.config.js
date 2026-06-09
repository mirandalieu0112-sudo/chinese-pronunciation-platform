import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  base: '/chinese-pronunciation-platform/',
  plugins: [
    basicSsl()
  ],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    https: true
  }
})
