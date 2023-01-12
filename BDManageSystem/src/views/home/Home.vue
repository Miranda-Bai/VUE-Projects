<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover">
        <div class="user">
          <img src="@/assets/images/user.jpeg" alt="" />
          <div class="user-info">
            <p class="name">Admin</p>
            <p class="role">Super Administrator</p>
          </div>
        </div>
        <div class="login-info">
          <p>last login time: <span>2022-01-12</span></p>
          <p>last login location: <span>Auckland</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" style="margin-top: 10px; height: 350px">
        <el-table :data="tableData" style="width: 100%" height="300">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 0px">
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <el-icon class="icons" :style="{ background: item.color }">
            <component :is="item.icon"></component>
          </el-icon>
          <div class="details">
            <p class="num">${{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px">
        <div ref="echart" style="height:280px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
// import axios from "axios";
import { onMounted, ref, getCurrentInstance } from "vue";

const tableLabel = {
  name: "Sale",
  todayBuy: "today",
  monthBuy: "monthly",
  totalBuy: "totally",
};
let tableData = ref([]);
const proxy = getCurrentInstance().appContext;
const getTableList = async () => {
  // 二次封装axios
  let res = await proxy.config.globalProperties.$api.getTableData();
  tableData.value = res.tableData;
  // console.log(tableData.value);

  /* await axios.get("/home/getData").then(
    (res) => {
      if (res.data.code === 200) {
        // console.log(res.data.data.tableData)
        tableData.value = res.data.data.tableData;
        // console.log(tableData)
      }
    },
    (reason) => {
      console.warn(reason);
    }
  ); */
};
let countData = ref([]);
const getCountData = async () => {
  let res = await proxy.config.globalProperties.$api.getCountData();
  countData.value = res.tableData;
  console.log(countData.value);
};
onMounted(() => {
  getTableList();
  getCountData();
});
</script>
<style lang="less">
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info {
      .role {
        font-size: 14px;
        color: #999;
      }
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
}
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0px;
  .el-card {
    width: 32%;
    height: 80px;
    margin-bottom: 10px;
    .el-icon {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
      svg {
        width: 80px;
        height: 80px;
      }
    }
    .details{
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num{
        font-size: 30px;
        margin-bottom: 0;
        margin-top: 10px;
      }
      .txt{
        font-size: 16px;
        text-align: center;
        color:rgb(139, 135, 135);
        margin-top:5px;
      }
    }
  }
}
</style>
