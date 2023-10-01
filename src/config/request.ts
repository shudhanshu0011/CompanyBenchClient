import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const defaultOptions = {
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    service_ref: 123456,
  },
};

const http = axios.create(defaultOptions);

http.interceptors.request.use(
  (config) => {
    // Read token for anywhere, in this case directly from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
