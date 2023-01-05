// 路由入口文件

// 1. 定义路由组件.
// 也可以从其他文件导入
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";
import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  //   routes, // `routes: routes` 的缩写
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "home-news",
          component: News,
        },
        {
          path: "home-message",
          component: Message,
          children: [
            {
              name: "detail",
              // 携带params参数 :id占位符
              path: "detail/:id/:title",
              component: Detail,
              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              // props:{a:1,b:'hello'},

              // props的第二种写法，值为布尔值，若布尔值为真，会把该路由收到的所有params参数，以props的形式传给Detail组件
              props: true,

              // props的第三种写法，值为函数,其他内容要全部改为query写法
             /*  props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title,
                }
              } */
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

// export default router;
