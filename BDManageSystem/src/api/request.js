import axios from "axios";
import config from "@/config/index.js";
import { ElMessage } from "element-plus";

const NETWORK_ERROR = "Nerwork error, please wait later to retry!";

// 创建一个axios实例对象
const service = axios.create({
  baseURL: config.baseApi,
});
// 在请求之前做一些事情
service.interceptors.request.use((req) => {
  // 可以自定义header
  // jwt-token认证的时候会用到自定义的header
  return req;
});

// 在请求之后做一些事情
service.interceptors.response.use((res) => {
    // console.log("res:",res)
  const { code, data, msg } = res.data;
  // 根据后端协商视情况而定
  if (code === 200) {
    return data;
  } else {
    // 网络请求错误
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

// 封装核心函数
function request(options) {
  /* {
    method:'get',
    data:{
        
    },
    mock:true
   } */
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  //对mock的处理
  let isMock = config.mock;
  if (typeof options.mock !== "undefined") {
    isMock = options.mock;
  }
  //对线上环境做处理
  if (config.env === "prod") {
    //如果是线上环境就不给用到mock的机会，因为不需要
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }

  return service(options);
}

export default request;
