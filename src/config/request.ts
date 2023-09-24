import axios from "axios";
const BASE_URL = "https://agdu7orib7.execute-api.eu-central-1.amazonaws.com/dev/v1";
const http = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "service_ref": 123456,
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  },
});

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
