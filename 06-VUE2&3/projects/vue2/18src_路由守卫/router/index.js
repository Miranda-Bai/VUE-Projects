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

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),

  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      // meta可以存放程序员自定义的路由源信息
      meta:{isAuth:false},
      children: [
        {
          name: "news",
          path: "home-news",
          component: News,
          beforeEnter: (to, from, next) => {
            // 独享路由守卫
          },
        },
        {
          name: "message",
          path: "home-message",
          component: Message,
          children: [
            {
              name: "detail",
              // 携带params参数 :id占位符
              path: "detail/:id/:title",
              component: Detail,
              // props的第二种写法，值为布尔值，若布尔值为真，会把该路由收到的所有params参数，以props的形式传给Detail组件
              props: true,
            },
          ],
        },
      ],
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
  ],
});
//初始化 和 路由每次切换之前都会调用，全局前置路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log("@", to, from);

  if(to.name === 'news' || to.name === 'message'){
    if (localStorage.getItem("school") === "AUT") {
      // 放行
      next();
    }
  } else{
    next();
  }
});
//初始化 和 路由每次切换之后都会调用，全局后置路由守卫, 后置路由守卫没有next()因为此时已经完成切换了
router.afterEach((to, from) => {
  console.log("##", to, from);
});

export default router;
