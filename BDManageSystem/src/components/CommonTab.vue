<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script setup>
import useStore from "@/store/index.js";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
// console.log("store:", store)
const tags = store.tabsLst;
// 获得当前路由而不是整个路由器
const route = useRoute();
// console.log("route.name", route.name)
// 获得整个路由器
const router = useRouter();

const changeMenu = (item) => {
  router.push({
    name: item.name,
  });
};

const handleClose = (tag, index) => {
  let length = tags.length - 1;
  //处理store中的tabsLst
  store.closeTab(tag);
  //做第一个判断
  if (tag.name !== route.name) {
    return;
  }
  // 关掉当前，跳到前一个
  if (index === length) {
    router.push({
      name: tags[index - 1].name,
    });
  } else {
    router.push({
      name: tags[index].name,
    });
  }
};
</script>
<style lang="less" scoped>
.tags {
  padding: 10px;
  padding-bottom: 0;
  width: 100%;
  // height: 30px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
