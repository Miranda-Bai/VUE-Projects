import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//引入path，定义用@代替src文件夹路径
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
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      
    ],
      
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  resolve: {
    alias,
  },
})
