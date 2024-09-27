import axios from 'axios';

// 创建实例时配置默认值
const http = axios.create({
  
  timeout: 5000,
  headers:{
    "terminal":"h5",
    
  }
});
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  const token = localStorage.getItem('h5_token');
  // 不需要拦截token的接口
  const noToken = ['/login'];

  if (token && !noToken.includes(config.url)) {
    config.headers['h-token'] = token;
    // config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // 接口异常的数据给用户提示

  if (response.data.code === -1) {
    ElMessage.warning(response.data.msg);
  }

  if (response.data.code === -2) {
    // ElMessage.warning(response.data.msg);
    localStorage.removeItem('h5_token');
    localStorage.removeItem('h5_userInfo');
   
    window.location.href = window.location.origin
  }

    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default http;

