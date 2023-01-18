import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// 全局导入mockjs
import "@/api/mock.js";
import api from "@/api/api.js";
// import '@/assets/less/index.less'
//全局注册图标
// import { User, Location, Setting } from "@element-plus/icons-vue";
// 全局注册所有图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";

import useStore from "@/store/index.js";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.config.globalProperties.$api = api;
app.use(createPinia());
const store = useStore();
//登陆后刷新页面会丢失数据的解决方案
store.addMenu(router);
function checkRouter(path){
    let hasCheck = router.getRoutes().filter(route=>{
        return route.path === path
    }).length;
    if(hasCheck){
        return true;
    }else{
        return false;
    }
}
//路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  store.getToken();
  const token = store.token;
  //未登陆，跳转到login
  if (!token && to.name !== "login") {
    next({
      name: "login",
    });
  }else if(!checkRouter(to.path)){
    //已登陆，但是页面不存在，跳到home
    next({
        name: "home",
      });
  }else {
    next();
  }
});
app.use(router);
app.mount("#app");
