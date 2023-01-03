import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";

const app = createApp(App);
// 对 Vue 2 中 Vue.prototype 使用方式的一种替代
// app.config.globalProperties.x = { a: 1, b: 2 };

app.mount("#app");
