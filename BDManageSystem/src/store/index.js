import { defineStore } from "pinia";
import Cookie from "js-cookie";

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
      menu: [],
      token: "",
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
    closeTab(val) {
      let res = this.tabsLst.findIndex((item) => {
        return item.name === val.name;
      });
      //如果存在则删除
      this.tabsLst.splice(res, 1);
    },
    setMenu(val) {
      this.menu = val;
      localStorage.setItem("menu", JSON.stringify(this.menu));
    },
    addMenu(router) {
      if (!localStorage.getItem("menu")) {
        return;
      }
      const menu = JSON.parse(localStorage.getItem("menu"));
      this.menu = menu;
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            let url = `../views/${item.url}`;
            item.component = () => import(url);
            return item;
          });
          menuArray.push(...item.children);
          // console.log("item.children:",item.children)
        } else {
          let url = `../views/${item.url}`;
          item.component = () => import(url);
          menuArray.push(item);
        }
      });

      menuArray.forEach((item) => {
        router.addRoute("home1", item);
      });
      // console.log("menuArry:", menuArray)
      // console.log("router in add menu:", router.getRoutes())
    },
    clearMenu() {
      this.menu = [];
      localStorage.removeItem("menu");
    },
    setToken(val) {
      //路由守卫，防止用户未登陆，直接到/home页面
      this.token = val;
      Cookie.set("token", val);
    },
    clearToken() {
      this.token = "";
      Cookie.remove("token");
    },
    getToken() {
      this.token = this.token || Cookie.get("token");
    },
  },
});
