<template>
  <div class="common-layout">
    <el-container style="height:100%;">
      <CommonAside></CommonAside>
      <el-container class="r-container">
        <CommonHeader></CommonHeader>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";
</script>
<style lang="less" scoped>
.r-container {
  flex-wrap: wrap;
}
.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background-color: #545c64;
    }
  }
}
</style>
