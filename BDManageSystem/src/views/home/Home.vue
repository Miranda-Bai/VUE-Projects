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
      <el-card style="height: 280px">
        <div ref="echart" style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div ref="userEchart" style="height: 240px"></div>
        </el-card>
        <el-card style="height: 260px">
          <div ref="videoEchart" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
// import axios from "axios";
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import * as echarts from "echarts";

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
  // console.log(countData.value);
};

// 拿到DOM标签里ref="echart"的元素
let echart = ref(null);
let userEchart = ref(null);
let videoEchart = ref(null);

// 关于echarts表格的渲染部分 x轴的样式
let xOptions = reactive({
  // 图例文字颜色
  textStyle: {
    color: "#333",
  },
  grid: {
    left: "20%",
  },
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series: [],
});
// 饼状图样式
let pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: [],
});

let orderData = reactive({
  xData: [],
  series: [],
});

let userData = reactive({
  xData: [],
  series: [],
});
let videoData = reactive({
  series: [],
});
const getChartsData = async () => {
  let result = await proxy.config.globalProperties.$api.getEchartsData();
  console.log("result: ", result);
  let res = result.orderData;
  let userRes = result.userData;
  let videoRes = result.videoData;

  orderData.xData = res.date;
  const keyArray = Object.keys(res.data[0]);
  const series = [];
  keyArray.forEach((key) => {
    series.push({
      name: key,
      data: res.data.map((item) => item[key]),
      type: "line",
    });
  });
  orderData.series = series;
  xOptions.xAxis.data = orderData.xData;
  xOptions.series = orderData.series;
  // 进行渲染
  // 拿到DOM标签里ref="echart"的元素, 因为是ref，所以取到元素的DOM要用.value
  let hEcharts = echarts.init(echart.value);
  hEcharts.setOption(xOptions);

  userData.xData = userRes.map((item) => item.date);
  userData.series = [
    {
      name: "New Users",
      data: userRes.map((item) => item.new),
      type: "bar",
    },
    {
      name: "Active Users",
      data: userRes.map((item) => item.active),
      type: "bar",
    },
  ];
  xOptions.xAxis.data = userData.xData;
  xOptions.series = userData.series;
  let uEchart = echarts.init(userEchart.value);
  uEchart.setOption(xOptions);

  videoData.series = [
    {
      data: videoRes,
      type: "pie",
    },
  ];
  pieOptions.series = videoData.series;
  let vEchart = echarts.init(videoEchart.value);
  vEchart.setOption(pieOptions);
};

onMounted(() => {
  getTableList();
  getCountData();
  getChartsData();
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
        width: 50px;
        height: 50px;
      }
    }
    .details {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 0;
        margin-top: 10px;
      }
      .txt {
        font-size: 16px;
        text-align: center;
        color: rgb(139, 135, 135);
        margin-top: 5px;
      }
    }
  }
}
.graph{
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  .el-card{
    width: 48%;
  }
}
</style>
