import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 按需导入element-plus UI组件库
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import svgLoader from "vite-svg-loader";
import { svgBuilder } from './src/plugins/svgBuilder'; 

// 引入path，定义用@代替src文件夹路径
import { resolve } from "path";
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

const alias = {
  "@": pathResolve("src"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    svgBuilder('./src/icons/svg/'),
  ],
  resolve: {
    alias,
  },
});
