import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./base_url";


// *** axios instance ***

const axiosClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000, // 30 seconds timeout
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});


// *** Request Interceptorrrrr ***

axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
  );

  // *** Response Interceptor ***

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ECONNABORTED') {
            console.error("API Error: Request timeout");
        } else if (error.message === 'Network Error') {
            console.error("API Error: Network Error - Server may be unreachable or CORS issue");
        } else if (error.response) {
            // Server responded with error status
            console.error("API Error:", error.response.status, error.response.data);
        } else if (error.request) {
            // Request was made but no response received
            console.error("API Error: No response received", error.request);
        } else {
            console.error("API Error:", error.message);
        }
        return Promise.reject(error);
    }  
);
 
export default axiosClient;