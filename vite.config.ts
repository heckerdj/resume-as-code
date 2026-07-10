import { resolve } from 'node:path'
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
    sourcemap: false,
    rollupOptions: {
      // Multi-page build: the resume SPA plus the static family-recipes pages, all
      // processed the same way (minified, hashed assets, base-path aware).
      input: {
        main: resolve(__dirname, 'index.html'),
        'family-recipes': resolve(__dirname, 'public/family-recipes/recipes.html')
      }
    }
  },
  define: {
    // Pass REACT_APP_PR_PATH to the client-side code
    'import.meta.env.REACT_APP_PR_PATH': JSON.stringify(process.env.REACT_APP_PR_PATH || '')
  }
})
