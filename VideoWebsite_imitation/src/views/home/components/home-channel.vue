<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const active = ref(0);
// TS接口，用来标记一些数据格式
interface INvaItem{
    id:string,
    text:string,
}
// 频道数据
const list = ref<INvaItem[]>([])

axios({
  // 利用mockjs发送轮播图请求
  url: "/navList",
  method: "get",
}).then(
  (res) => {
    list.value = res.data.result
  },
  (reason) => {
    console.warn(reason);
  }
);
</script>
