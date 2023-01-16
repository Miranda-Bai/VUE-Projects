<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <CommonAside></CommonAside>
      <el-container class="r-container">
        <CommonHeader></CommonHeader>
        <CommonTab></CommonTab>
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
import CommonTab from "@/components/CommonTab.vue";
</script>
<style lang="less" scoped>
.r-container {
  flex-wrap: wrap;
  // 固定height，当内容超出自动出现竖向滚动条
  height: 100%;
  overflow-y: auto;
}
.common-layout {
  box-sizing: border-box;
  height: 100%;
  & > .el-container {
    height: 100%;
    align-items: flex-start;

    & > .el-aside {
      height: 100%;
      background-color: #545c64;
    }
  }
}
:deep(.el-main) {
  padding: 10px;
  // height: 100%;
}
</style>
