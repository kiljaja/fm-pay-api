const { resolve } = require('path');
const { defineConfig } = require('vite');

const pages = resolve(__dirname, 'pages/');
module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
});
