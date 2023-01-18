<template>
  <el-aside :width="store.asideWidth">
    <el-menu
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :collapse="!store.isCollapse"
      :collapse-transition="false"     
    >
      <h3 v-show="store.isCollapse">Management</h3>
      <h3 v-show="!store.isCollapse">Setting</h3>
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        v-for="item in hasChildren"
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(subItem, subIndex) in item.children"
            :index="subItem.path"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <el-icon>
              <component :is="subItem.icon"></component>
            </el-icon>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import useStore from "@/store/index.js";
import { useRouter } from "vue-router";

const list = [
  {
    path: "/user",
    name: "user",
    label: "User Management",
    icon: "user",
    url: "UserManage/UserManage",
  },
  {
    path: "/other",
    name: "other",
    label: "Others",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "page one",
        icon: "setting",
        url: "Other/PageOne",
      },
      {
        path: "/page2",
        name: "page2",
        label: "page two",
        icon: "setting",
        url: "Other/PageTwo",
      },
    ],
  },
];
const store = useStore();
// console.log("store", store)
//取自store的侧边栏
const asyncLst = store.menu;

const noChildren = asyncLst.filter((item) => !item.children);

// console.log("nochildren : ", noChildren);
const hasChildren = asyncLst.filter((item) => item.children);

// console.log("haschildren : ", hasChildren);

const router = useRouter();
const clickMenu = (item) => {
  router.push({
    name: item.name,
  });
  // pinia管理
  store.selectMenu(item);
};


</script>
<style lang="less" scoped>
.el-aside {
  height: 100%;
  .el-menu {
    border-right: none;
    h3 {
      line-height: 18px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
