# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
{
    code:200,
    data:{
        'orderData':{
            "date":[],
            "data|7":{
                "Apple":"@integer(1000,5000)",
                "Xiaomi":"@integer(1000,5000)",
                "Huawei":"@integer(1000,5000)",
                "Oppo":"@integer(1000,5000)",
                "Vivo":"@integer(1000,5000)",
                "One plus":"@integer(1000,5000)",
            }
        },
        'videoData':[
            {
                name:"Xiaomi",
                value:2999,
            },
            {
                name:"Apple",
                value:5999,
            },
            {
                name:"Vivo",
                value:1500,
            },
            {
                name:"Oppo",
                value:1999,
            },
            {
                name:"Meizu",
                value:2200,
            },
            {
                name:"Samsung",
                value:4500,
            },
        ]
    }
}

MockData下js文件的返回数据必须是以下code+data的形式，否则返回数据是undefined
return {
      code: 200,
      data: {
        count: mockList.length,
        list: pageList,
      },
    };