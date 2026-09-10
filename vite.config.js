import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
  preview: { host: '127.0.0.1', port: 5173, strictPort: true },
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        platform: resolve('platform.html'),
        landing: resolve('landing.html'),
        brand: resolve('brand.html'),
      },
    },
  },
});
