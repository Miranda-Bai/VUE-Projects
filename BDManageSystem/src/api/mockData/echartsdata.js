export default {
  getEchartsData: () => {
    return {
      code: 200,
      data: {
        orderData: {
          date: [],
          "data|7": {
            Apple: "@integer(1000,5000)",
            Xiaomi: "@integer(1000,5000)",
            Huawei: "@integer(1000,5000)",
            Oppo: "@integer(1000,5000)",
            Vivo: "@integer(1000,5000)",
            "One plus": "@integer(1000,5000)",
          },
        },
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
      },
    };
  },
};
