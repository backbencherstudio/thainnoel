import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";


// *** axios instance ***

const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.7.12:3000",
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