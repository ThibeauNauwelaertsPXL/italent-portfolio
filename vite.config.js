import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/ITalentPortfolio/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue': 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        }
      }
    }
  }
})