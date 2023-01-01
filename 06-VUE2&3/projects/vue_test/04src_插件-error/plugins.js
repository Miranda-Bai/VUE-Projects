// 插件

export default {
  install(Vue) {
    
    // 全局过滤器
    Vue.config.globalProperties.$filters = {
        mySlice(value) {
            return value.slice(0, 4);
          },
    }

    // 全局自定义指令
    Vue.directive("fbind", {
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
    Vue.mixin({
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
    Vue.config.globalProperties.$hello = () => {
      alert("hello!");
    };
    console.log("@@@@install",Vue);
  },
};
