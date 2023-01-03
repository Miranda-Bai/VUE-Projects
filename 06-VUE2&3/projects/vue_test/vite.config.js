import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import myPlugins from './04src_插件/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(),myPlugins],  ?????
  plugins: [vue()],
})
