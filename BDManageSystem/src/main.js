import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
// import '@/assets/less/index.less'
//全局注册图标
import { User, Location,Setting } from "@element-plus/icons-vue";

const app = createApp(App);
app.component("user", User);
app.component("location", Location);
app.component("setting", Setting);
app.use(router);
app.mount("#app");
