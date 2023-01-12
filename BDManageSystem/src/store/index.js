import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside",{
  state: () => {
    return {
      isCollapse: true,
    };
  },
  getters: {
    asideWidth: (state) => {
      return state.isCollapse ? "180px" : "64px";
    },
  },
  actions: {
    //functions
    updateIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
