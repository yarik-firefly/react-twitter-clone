import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers.authorization = window.localStorage.getItem("token");
  return config;
});

export { axios };
