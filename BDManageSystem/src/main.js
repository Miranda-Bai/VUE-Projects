import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// 全局导入mockjs
import '@/api/mock.js'
import api from '@/api/api.js'

// import '@/assets/less/index.less'
//全局注册图标
// import { User, Location, Setting } from "@element-plus/icons-vue";
// 全局注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from "pinia";

const app = createApp(App);
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key, component);
}
app.config.globalProperties.$api = api;
// console.log(app.config.globalProperties)
app.use(router);
app.use(createPinia());
app.mount("#app");
