import axios from "axios";

// Token cache to avoid re-authenticating on every request
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get cached authentication token or null if expired/missing
 */
export const getCachedToken = (): string | null => {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.token;
  }
  return null;
};

/**
 * Set authentication token in cache
 */
export const setCachedToken = (token: string, expiresIn: number): void => {
  cachedToken = {
    token,
    expiresAt: Date.now() + expiresIn * 1000 - 60000, // Subtract 1 minute for safety
  };
};

/**
 * Clear cached token (useful for testing or logout)
 */
export const clearCachedToken = (): void => {
  cachedToken = null;
};

// Create axios instance for Boom API (server-side only)
export const boomApi = axios.create({
  baseURL: process.env.BOOM_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to automatically add Bearer token
boomApi.interceptors.request.use(
  (config) => {
    // Skip adding token for auth endpoints
    if (!config.url?.includes("/auth/token")) {
      const token = getCachedToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
boomApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Clear token on 401 errors
    if (error.response?.status === 401) {
      clearCachedToken();
    }

    return Promise.reject(error);
  }
);
