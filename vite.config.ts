import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api/news': {
        target: 'http://v.juhe.cn/toutiao/index',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/news/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 添加全局 Sass 变量/混入
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
})