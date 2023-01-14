import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", {
  state: () => {
    return {
      isCollapse: true,
      currentMenu: null,
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
    selectMenu(val) {
      // 判断
      val.name === "home"
        ? (this.currentMenu = null)
        : (this.currentMenu = val.name);
    },
  },
});
