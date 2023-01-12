/**
 * 环境配置文件
 * 一般在企业级项目里面有三个环境：
 * 开发环境
 * 测试环境
 * 线上环境
 */
// 获取当前环境 默认为线上环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'/',
    },
    test:{
        baseApi:'//test.future.com/api',
        mockApi:'/home',
    },
    prod:{
        baseApi:'//future.com/api',
        mockApi:'/home',
    },
}

export default{
    env,
    // mock的总开关,全局开关,可单个请求开启mock
    mock:false,
    ...EnvConfig[env]
}