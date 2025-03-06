import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
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
