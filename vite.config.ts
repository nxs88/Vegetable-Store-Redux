/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Vegetable-Store-Redux/',
  plugins: [react()],
  test: {
    setupFiles: ['./setupTests.ts'],
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.{ts,tsx}'],
  },
});
