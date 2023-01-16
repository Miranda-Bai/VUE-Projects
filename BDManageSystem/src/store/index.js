import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => {
    return {
      isCollapse: true,
      currentMenu: null,
      tabsLst: [
        {
          path: "/",
          name: "home",
          label: "Homepage",
          icon: "home",
        },
      ],
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
      /* val.name === "home"
        ? (this.currentMenu = null)
        : (this.currentMenu = val); */
      if (val.name === "home") {
        this.currentMenu = null;
      } else {
        this.currentMenu = val;
        let result = this.tabsLst.findIndex((item) => {
          return item.name === val.name;
        });
        // 没有则新增到tabLst中
        result === -1 ? this.tabsLst.push(val) : "";
      }
    },
    closeTab(val){
      let res = this.tabsLst.findIndex(item =>{
        return item.name === val.name
      })
      //如果存在则删除
      this.tabsLst.splice(res,1)
    }
  },
});
