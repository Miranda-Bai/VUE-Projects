<script setup>
/* import useStore from "@/store/index.js";
import { useRouter } from "vue-router";
//登陆后刷新页面会丢失数据的解决方案
const store = useStore();
const router = useRouter();
store.addMenu(router); */
</script>
<template>
  <router-view></router-view>
</template>

<style lang="less">
:root {
  height: 100%;
  body {
    height: 100%;
  }

  #app {
    height: 100%;
  }
}
</style>
