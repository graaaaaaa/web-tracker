import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// CI error-reporting verification (will be reverted)
export default defineConfig({
  plugins: [react()],
  base: './',
})
