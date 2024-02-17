import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import ViteWebp from 'vite-plugin-webp-generator';
import VitePluginWebpCompress from 'vite-plugin-webp-compress';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      exclude: 'sprite.svg',
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
      }
    }),
    VitePluginWebpCompress(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
