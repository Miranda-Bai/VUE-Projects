<template>
  <el-header>
    <div class="l-content">
      <el-button size="small">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <h3>Main Page</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="imgSrc" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Dashboard</el-dropdown-item>
            <el-dropdown-item>Log out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup>
import { Menu } from "@element-plus/icons-vue";

const imgSrc = new URL('@/assets/images/user.jpeg', import.meta.url).href;
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
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
  h3{
    color:#fff
  }
}
</style>
