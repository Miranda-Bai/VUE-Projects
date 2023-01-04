import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // ← ← ← ← ← ←
    host: "0.0.0.0", // ← 新增内容 ←
  },
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器 方式一
  /* devServer:{
    proxy:'http://localhost:5000'
  }, */
  // 开启代理服务器 方式二
  devServer: {
    proxy: {
      "/miranda": {
        target: "http://localhost:5000",
        pathRewrite: { "^/miranda": "" },
        // 支持websocket
        // ws: true,
        // 用于控制请求头中的host值
        // changeOrigin:true,
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        // 支持websocket
        // ws: true,
        // 用于控制请求头中的host值
        // changeOrigin:true,
      },
    },
  }, 
});
