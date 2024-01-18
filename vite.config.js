import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.ts',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    eslint({
      include: ['./resources/js/**/*.{vue,js,ts}', './*.{js,ts}'],
    }),
  ],
})
