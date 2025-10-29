import axios from "axios";

/**
 * Axios instance for client-side API calls (browser)
 * Used for requests to our own Next.js API routes (/api/*)
 */
export const clientApi = axios.create({
  baseURL: "/", // Relative paths to our API routes
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
clientApi.interceptors.request.use(
  (config) => {
    // You can add client-side auth tokens here if needed
    // const token = localStorage.getItem('auth_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
clientApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors silently or with user-friendly notifications
    // if (error.response?.status === 401) {
    //   // Redirect to login page or show error message
    // }

    return Promise.reject(error);
  }
);
