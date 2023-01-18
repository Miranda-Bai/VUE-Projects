<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" plain @click="handleCollapse">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="breadcrumb">
        <!-- 首页是一定存在的，所以直接写死 -->
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">
          {{ current.meta.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="imgSrc" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>My profile</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">Log out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup>
import { Menu } from "@element-plus/icons-vue";
import useStore from "@/store/index.js";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const imgSrc = new URL("@/assets/images/user.jpeg", import.meta.url).href;

const store = useStore();
const handleCollapse = () => {
  store.updateIsCollapse();
};
const route = useRoute();
const current = computed(() => {
  // return store.currentMenu;
  if (route.name === "home") {
    return null;
  }
  // console.log("route:", route.meta.label)
  return route;
});
const router = useRouter();
const handleLogout = () => {
  store.clearMenu();
  store.clearToken();
  router.push({
    name: "login",
  });
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.breadcrumb :deep(span) {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
