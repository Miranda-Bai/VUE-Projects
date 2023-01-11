<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.imgSrc">
      <img :src="item.imgSrc" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

// TS接口，用来标记一些数据格式
interface ISwipeItem {
  imgSrc: string;
  link: string;
}
const list = ref<ISwipeItem[]>([]);

axios({
  url: "/swiperList",
  method: "get",
}).then(
  (res) => {
    list.value = res.data.result;
  },
  (reason) => {
    console.warn(reason);
  }
);
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
