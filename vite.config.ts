/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
  build: {
    // Headroom before Vite warns about chunk size (the data-heavy timeline
    // page is the big one). No manualChunks yet — add one if a chunk grows
    // past this limit.
    chunkSizeWarningLimit: 600,
  },
});
