// 1.引入
import { defineStore } from "pinia";

// 2.定义 3.暴露给其他组件，使其他组件能看到
export const usePersonStore = defineStore("person", {
  state: () => ({
    personLst: [
      {
        id: "001",
        name: "Miranda",
        gender: "female",
      },
    ],
  }),
  getters: {
  },
  actions: {
    addPerson(val){
      this.personLst.unshift(val);
    },
  },
});
