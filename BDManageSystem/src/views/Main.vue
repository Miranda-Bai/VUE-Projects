<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <CommonAside></CommonAside>
      <el-container class="r-container" >
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

// 固定右边宽度 180px是侧边栏的宽度
let width = window.screen.availWidth - 180 +'px';
console.log("widwo.width =  ",width )
</script>
<style lang="less" scoped>
.r-container {
  flex-wrap: wrap;
  // 固定height，当内容超出自动出现竖向滚动条
  height: 100%;
  overflow-y: auto;
}
.common-layout {
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
</style>
