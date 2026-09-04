import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The client talks to the Express backend only for the contact form.
// In development, /api is proxied to the Express server (default :5000).
// In production, the built client is served by Express from the same origin,
// so the relative /api path works without any proxy.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY_TARGET || 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Route-level code splitting is handled via React.lazy in App.jsx;
    // keep vendor chunks separate for better long-term caching.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
