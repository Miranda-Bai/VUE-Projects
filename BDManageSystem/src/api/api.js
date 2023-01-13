/**
 * 对整个项目api的管理
 */
import request from "./request"

export default{
    //home组件左侧表格数据获取
    getTableData(params){
        return request({
            url:"/home/getData",
            method:"get",
            data:params,
            // 当前请求开启mock
            mock:true,
        })
    },
    //home组件右侧上部分数据获取
    getCountData(params){
        return request({
            url:"/home/getCountData",
            method:"get",
            data:params,
            // 当前请求开启mock
            mock:true,
        })
    },
    //home组件右侧中间部分数据获取
    getCountData(params){
        return request({
            url:"/home/getEchartsData",
            method:"get",
            data:params,
            // 当前请求开启mock
            mock:true,
        })
    },
}