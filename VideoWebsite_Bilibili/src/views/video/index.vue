<template>
  <AppHeader></AppHeader>
  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo" ></VideoPlay>
  <!-- 视频详情 -->
  <VideoInfo :videoInfo="videoInfo" ></VideoInfo>
  <!-- 相关推荐/评论 -->
  <VideoBottom ></VideoBottom>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import AppHeader from '@/components/app-header.vue'
import VideoPlay from './components/video-play.vue'
import VideoInfo from './components/video-info.vue'
import VideoBottom from './components/video-bottom.vue'

// ?表示参数可有可无
export interface IVideoInfo {
  author?: string;
  authorIconSrc?: string;
  commentCount?: number;
  date?: string;
  id?: string;
  poster?: string;
  playCount?: string;
  likeCount?: string;
  favCount?: string;
  videoSrc?: string;
  videoTitle?: string;
}
const videoInfo = ref<IVideoInfo>({});
// 获取路由对象
const route = useRoute();

axios({
  url: "/videoDetail",
  method: "get",
  //   根据路由对象的id参数发送请求获取对应的视频详情
  params: { id: route.params.id },
}).then(({ data }) => {
  videoInfo.value = data.result;
});
</script>
<style></style>
