import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? 'https://mgvts.github.io/web-reactivity/' : '/';

  return {
    root: '.',
    base,
    build: {
      rollupOptions: {
        input: {
          index: './index.html',
          native: './pages/native.html',
          'native-proxy': './pages/native-proxy.html',
          'vue-ref': './pages/vue-ref.html',
          'react-hooks': './pages/react-hooks.html',
        },
      },
    },
  }
})
