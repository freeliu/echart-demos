import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
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
};
