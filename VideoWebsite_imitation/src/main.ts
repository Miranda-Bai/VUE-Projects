import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/base.less";
import "./assets/styles/iconfont.less";
// 引入mockjs模拟后端数据方便测试
import "@/mock/index";
// 引入你需要的组件
import { Tab, Tabs } from "vant";
import { Swipe, SwipeItem } from "vant";

const app = createApp(App);
app.use(router);
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.mount("#app");
