<template>
  <h2>video detail page</h2>
  <router-link to="/">click and go to home page</router-link>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

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
  console.log(data.result);
});
</script>
<style></style>
