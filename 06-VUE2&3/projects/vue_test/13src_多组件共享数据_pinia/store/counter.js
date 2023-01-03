// 1.引入
import { defineStore } from "pinia";

// 2.定义 3.暴露给其他组件，使其他组件能看到
export const useCounterStore = defineStore("counter", {
  state: () => ({
    sum: 0,
    schoolName: "AUT",
    major: "information technology",
    personLst: [
      {
        id: "001",
        name: "Miranda",
        gender: "female",
      },
    ],
  }),
  getters: {
    // double是通过state里的sum算出来的，所以是computed
    //   double: (state) => state.sum * 2,
    grow: (state) => state.sum * 10,
  },
  actions: {
    increment(val) {
      // console.log(val);
      this.sum += val;
    },
    minus(val) {
      this.sum -= val;
    },
    //   当前求和为奇数再加
    incrementOdd(val) {
      if (this.sum % 2 !== 0) {
        this.increment(val);
      }
      console.log("当前求和为奇数再加");
    },
    addPerson(val){
      this.personLst.unshift(val);
    },
  },
});
