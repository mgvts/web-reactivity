import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        native: './pages/native.html',
        'preact-signals': './.html',
        'vue-ref': './pages/vue-ref.html',
        'jsx-preact': './pages/jsx-preact.html',
      },
    },
  },
});
