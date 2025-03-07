import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToRem from 'postcss-pxtorem';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToRem({
          rootValue({ file }) {
            // 动态设置 rootValue
            if (file.includes('mobile')) {
              return 37.5; // 移动端设计稿宽度的 1/10
            } else {
              return 192; // PC 端设计稿宽度的 1/10
            }
          },
          propList: ['*'], // 所有属性都将从 px 转换为 rem
          exclude: /node_modules/i, // 排除 node_modules 文件夹
          selectorBlackList: ['.norem'], // 排除以 `.norem` 开头的类名
          replace: true, // 替换原样式中的 px 单位
          minPixelValue: 1, // 小于等于 1 的 px 不进行转换
        }),
      ],
    },
  },
  server: {
    port: 5175,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  build: {
    emptyOutDir: true,
    assetsDir: "static",
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        // 限制每个 chunk 的最大大小（单位：字节）
        chunkFileNames: "chunks/[name].[hash].js",
        maxFileSize: 1024 * 1024, // 1MB
      },
    },
  },
})
