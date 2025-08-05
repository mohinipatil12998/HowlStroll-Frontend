// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:59424/api', // Replace with your actual base URL
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage, sessionStorage, or a global state manager (e.g., Redux, Zustand)
    const token = localStorage.getItem('token'); // Or sessionStorage.getItem('authToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Optional, but good for error handling/refreshing tokens)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    // Example: Handle 401 Unauthorized for token refresh
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      // You would typically have a function here to refresh the token
      // const newAccessToken = await refreshToken();
      // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      // return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;