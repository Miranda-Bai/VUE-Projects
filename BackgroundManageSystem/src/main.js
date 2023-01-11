import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.scss";
import router from "./router/index.js";
// import SvgIcon from '@/icons'
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App);
// SvgIcon(app);
app.component('SvgIcon', SvgIcon)
app.use(router);
app.mount("#app");
