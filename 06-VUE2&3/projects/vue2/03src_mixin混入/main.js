import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 全局引入混合并注册，所有组件都可用(慎用)
/* import { mixin } from './mixin'
Vue.mixin(mixin); */

createApp(App).mount('#app')
