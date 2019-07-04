import * as axios from 'axios';
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

// 创建axios实例
const service = axios.default.create({
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {'Pragma': 'no-cache', 'Cache-Control': 'no-cache', 'Content-Type': 'application/json'},
});

// request拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error: any) => {
  Promise.reject(error);
});

// response响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    Toast.fail('请求错误');
  } else {
    return response.data;
  }
}, (error: any) => {
  Promise.reject(error);
});

export default service;
