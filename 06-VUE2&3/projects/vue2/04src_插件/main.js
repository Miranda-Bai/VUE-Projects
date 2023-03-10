import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";

// 引入插件
import myPlugins from "./plugins";


const app = createApp(App);
// 使用插件
app.use(myPlugins);
app.mount("#app");

// console.log(app)

/* setup(){
    // getCurrentInstance() 获取当前组件实例
    
    const { ctx }  = getCurrentInstance();  //  方式一，这种方式只能在开发环境下使用，生产环境下的ctx将访问不到
    
    const { proxy } = getCurrentInstance(); //  方式二，此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
    } */
    



