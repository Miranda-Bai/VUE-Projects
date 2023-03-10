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
    getEchartsData(params){
        return request({
            url:"/home/getEchartsData",
            method:"get",
            data:params,
            // 当前请求开启mock
            mock:true,
        })
    },
    getUserData(params){
        // console.log("params in api:", params)
        return request({
            url:"/user/getUser",
            method:"get",
            //params:{
            //   total:0,
            //   page:1,
            // }
            data:params,
            mock:true,
        })
    },
    addUser(params){
        // console.log("adduser in api:", params)
        return request({
            url:"/user/add",
            method:"post",
            data:params,
            mock:true,
        })
    },
    editUser(params){
        return request({
            url:"/user/edit",
            method:"post",
            data:params,
            mock:true,
        })
    },
    deleteUser(params){
        return request({
            url:"/user/delete",
            method:"get",
            data:params,
            mock:true,
        })
    },
    //根据用户的用户名不同返回不一样的菜单列表
    getMenu(params){
        return request({
            url:"/permission/getMenu",
            method:"post",
            data:params,
            mock:true,
        })
    }
}