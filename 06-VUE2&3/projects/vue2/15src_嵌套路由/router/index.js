// 路由入口文件

// 1. 定义路由组件.
// 也可以从其他文件导入
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
/* const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
]; */

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
  //   routes, // `routes: routes` 的缩写
  routes: [
    { 
      path: "/home", 
      component: Home,
      children:[
        {
          path: "home-news",
          component: News
        },
        {
          path: "home-message",
          component: Message
        }
      ]
    },
    { 
      path: "/about", 
      component: About 
    },
  ],
});

// export default router;
