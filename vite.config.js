import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/qrew_showcase/',
  plugins: [
    tailwindcss(),
  ],
})