import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: '/dinado/' pour GitHub Pages — adapter selon le nom du repo
export default defineConfig({
  plugins: [react()],
  base: '/dinado/',
})
