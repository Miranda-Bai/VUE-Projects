// 插件

const myPlugins = {
  install(app) {
    
    // 全局过滤器
    app.config.globalProperties.$filters = {
        mySlice(value) {
            return value.slice(0, 4);
          },
    }

    // 全局自定义指令
    app.directive("fbind", {
      // 指令与元素成功绑定时调用
      bind(element, binding) {
        element.value = binding.value;
      },
      // 指定所在元素被插入页面时
      inserted(element, binding) {
        element.focus();
      },
      // 指令所在的模版被重新解析时调用
      update(element, binding) {},
    });

    // 定义混入
    app.mixin({
      methods: {
        showName() {
          alert(this.name);
        },
      },
      data() {
        return {
          msg: "welcom to learn mixin method",
        };
      },
    });

    // 给vue原型上添加一个方法
    app.config.globalProperties.$hello = () => {
      alert("hello!");
    };
    
  },
};


//默认暴露
export default myPlugins;