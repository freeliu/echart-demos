import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bar: resolve(__dirname, 'bar.html'),
        line: resolve(__dirname, 'line.html'),
        pie: resolve(__dirname, 'pie.html'),
      },
    },
    cssCodeSplit: false,
    minify: false,
  },
});
