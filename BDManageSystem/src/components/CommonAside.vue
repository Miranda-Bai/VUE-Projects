<template>
  <el-aside width="200px">
    <el-menu
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :collapse="false"
    >
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
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

const noChildren = list.filter((item) => !item.children);

// console.log("nochildren : ", noChildren);
const hasChildren = list.filter((item) => item.children);

// console.log("haschildren : ", hasChildren);
</script>
<style lang="less" scoped>
.el-menu{
    border-right: none;
}
</style>
