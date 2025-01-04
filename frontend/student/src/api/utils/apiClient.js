import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },

  timeout: 1000,
})

apiClient.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;