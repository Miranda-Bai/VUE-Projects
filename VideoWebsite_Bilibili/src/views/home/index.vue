<template>
    <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 频道组件 -->
  <HomeChannel></HomeChannel>
  <!-- 轮播图 -->
  <HomeSwipe></HomeSwipe>
  <!-- 视频列表 -->
  <HomeVideoList></HomeVideoList>
</template>
<script setup lang="ts">
// setup导入组件，无需注册
import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
import HomeVideoList from './components/home-video-list.vue'
</script>
<style></style>
