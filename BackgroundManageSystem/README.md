# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

初始化 scss 文件编译器
npm i sass -D

安装 element-plusUI 组件库，按需导入，不要全部导入
npm install element-plus --save

npm install vite-svg-loader --save-dev
2、配置 vite.config.js

import svgLoader from 'vite-svg-loader'
export default defineConfig({
  plugins: [vue(), svgLoader()]
})

