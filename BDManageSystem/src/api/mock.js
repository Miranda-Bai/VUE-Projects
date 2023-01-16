import Mock from 'mockjs'
import homeApi from './mockData/home'
import countdataApi from './mockData/countdata'
import echarsDataApi from './mockData/echartsdata'
import userApi from './mockData/userData'

// 拦截请求 拦截请求的地址
Mock.mock('/home/getData',homeApi.getHomeData )
Mock.mock('/home/getCountData',countdataApi.getCountData)
Mock.mock('/home/getEchartsData',echarsDataApi.getEchartsData)
//本地获取user数据 /.../是正则的写法
Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/add/,'post',userApi.createUser)