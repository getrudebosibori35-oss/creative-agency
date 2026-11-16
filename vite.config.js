import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  test: {
    globals: true, // 👈 This makes test, describe, it, etc., available globally
    environment: 'jsdom', 
  },

})
