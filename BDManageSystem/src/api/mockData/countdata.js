export default {
    getCountData:()=>{
        return {
            code:200,
            data:{
                tableData:[
                    {
                      name: "today's paid orders",
                      value:1234,
                      icon:"SuccessFilled",
                      color:"#2ec7c9",
                    },
                    {
                      name: "today's starred orders",
                      value:210,
                      icon:"StarFilled",
                      color:"#ffb980",
                    },
                    {
                      name: "today's unpaid orders",
                      value:1234,
                      icon:"Goods",
                      color:"#5ab1ef",
                    },
                    {
                      name: "monthly paid orders",
                      value:1234,
                      icon:"SuccessFilled",
                      color:"#2ec7c9",
                    },
                    {
                      name: "monthly starred orders",
                      value:1234,
                      icon:"StarFilled",
                      color:"#2ec7c9",
                    },
                    {
                      name: "monthly unpaid orders",
                      value:1234,
                      icon:"Goods",
                      color:"#2ec7c9",
                    },
                  ],
            }
        }
    }
}