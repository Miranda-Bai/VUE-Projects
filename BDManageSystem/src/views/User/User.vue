<template>
  <div class="table">
    <el-table :data="list" style="width: 100%">
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width ? item.width : 125"
      />
      <el-table-column fixed="right" label="Operations" min-width="180">
        <template #default>
          <el-button size="small">Edit</el-button>
          <el-button type="danger" size="small">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="config.total" hide-on-single-page="true"/>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref, reactive } from "vue";

const proxy = getCurrentInstance().appContext;
const tableLabel = reactive([
  {
    prop: "name",
    label: "Name",
  },
  {
    prop: "age",
    label: "Age",
  },
  {
    prop: "genderLabel",
    label: "Gender",
  },
  {
    prop: "birth",
    label: "Birth Date",
    width: 200,
  },
  {
    prop: "addr",
    label: "Address",
    width: 320,
  },
]);
const list = ref([]);
// total总页数 page当前页
const config = reactive({
  total:0,
  page:1,
})
const getUserData = async () => {
  let res = await proxy.config.globalProperties.$api.getUserData();

  list.value = res.list.map((item) => {
    item.genderLabel = item.gender === 0 ? "female" : "male";
    return item;
  });
  config.total = res.count;
  console.log("list.value:", list.value);
};

onMounted(() => {
  getUserData();
});
</script>
<style lang=""></style>
