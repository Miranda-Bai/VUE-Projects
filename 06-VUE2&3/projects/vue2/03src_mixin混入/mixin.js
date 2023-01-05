// 写完模块要暴露，其他模块才能看到它使用它
export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  data(){
    return {
        msg:'welcom to learn mixin method',
    }
  }
};

