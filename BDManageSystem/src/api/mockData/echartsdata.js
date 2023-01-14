// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = [];

export default {
  getEchartsData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          Apple: Mock.Random.float(100, 8000, 0, 0),
          Vivo: Mock.Random.float(100, 8000, 0, 0),
          Oppo: Mock.Random.float(100, 8000, 0, 0),
          Meizu: Mock.Random.float(100, 8000, 0, 0),
          Samsung: Mock.Random.float(100, 8000, 0, 0),
          Xiaomi: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 200,
      data: {
        orderData: {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: List,
        },
        // 饼图
        videoData: [
          {
            name: "Xiaomi",
            value: 2999,
          },
          {
            name: "Apple",
            value: 5999,
          },
          {
            name: "Vivo",
            value: 1500,
          },
          {
            name: "Oppo",
            value: 1999,
          },
          {
            name: "Meizu",
            value: 2200,
          },
          {
            name: "Samsung",
            value: 4500,
          },
        ],
        // 柱状图
        userData: [
          {
            date: "Mon",
            new: 5,
            active: 200,
          },
          {
            date: "Tue",
            new: 10,
            active: 500,
          },
          {
            date: "Wed",
            new: 12,
            active: 550,
          },
          {
            date: "Thur",
            new: 60,
            active: 800,
          },
          {
            date: "Fri",
            new: 65,
            active: 550,
          },
          {
            date: "Sat",
            new: 53,
            active: 770,
          },
          {
            date: "Sun",
            new: 33,
            active: 170,
          },
        ],
        // 折线图
        /*  'orderData': {
          date: [
            "20191001",
            "20191002",
            "20191003",
            "20191004",
            "20191005",
            "20191006",
            "20191007",
          ],
          data: List,
        }, */
      },
    };
  },
};
