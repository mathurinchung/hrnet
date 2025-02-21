import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, '/src') }
  },
  server: {
    port: 4200,
    host: '0.0.0.0'
  },
  build: {
    minify: true,
    sourcemap: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 600
  }
});
