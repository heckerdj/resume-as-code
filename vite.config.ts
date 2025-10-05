import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Support both BASE_PATH (legacy) and REACT_APP_PR_PATH (new)
  // REACT_APP_PR_PATH is used for PR previews (e.g., 'previews/pr-42')
  base: process.env.BASE_PATH || (process.env.REACT_APP_PR_PATH ? `/${process.env.REACT_APP_PR_PATH}/` : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  define: {
    // Pass REACT_APP_PR_PATH to the client-side code
    'import.meta.env.REACT_APP_PR_PATH': JSON.stringify(process.env.REACT_APP_PR_PATH || '')
  }
})
