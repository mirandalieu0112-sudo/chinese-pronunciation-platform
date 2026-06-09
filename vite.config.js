import { defineConfig } from 'vite'

export default defineConfig({
  base: '/chinese-pronunciation-platform/',
  plugins: [],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    https: false,
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
