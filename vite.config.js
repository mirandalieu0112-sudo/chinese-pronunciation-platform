import { defineConfig } from 'vite'

export default defineConfig({
  base: '/chinese-pronunciation-platform/',
  plugins: [],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    https: false
  }
})
