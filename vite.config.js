import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        blog: resolve('src/blog.html'),
      },
    },
  },
  server: {
    host: true, // listen on all addresses
  },
});