import axios from "axios";
//(1)
const service = axios.create({
  timeout: 30000, // 請求超時 30秒
  headers: {
    "Content-Type": "application/json",
  },
  //   baseURL: 'http://localhost:3000' //使用proxy不需要
});
//(2)
service.interceptors.request.use((config) => {
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

service.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default service;
