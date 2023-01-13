import Mock from 'mockjs'
import homeApi from './mockData/home'
import countdataApi from './mockData/countdata'
import echarsDataApi from './mockData/echartsdata'

// 拦截请求 拦截请求的地址
Mock.mock('/home/getData',homeApi.getHomeData )
Mock.mock('/home/getCountData',countdataApi.getCountData)
Mock.mock('/home/getEchartsData',echarsDataApi.getEchartsData)