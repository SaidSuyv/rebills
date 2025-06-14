import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve("src")
    }
  },
  plugins: [
    react(),
    UnoCSS(),
  ],
  base: '/rebills'
})
