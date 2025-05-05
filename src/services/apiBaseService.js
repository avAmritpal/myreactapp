import axios from 'axios';


// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://dummyjson.com/',
  timeout: 10000, // Set a timeout (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (optional: for adding authorization headers, logging, etc.)
api.interceptors.request.use(
  (config) => {
    // Example: Add Authorization token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (optional: for global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: Handle unauthorized errors globally
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Please login again.');
    }
    return Promise.reject(error);
  }
);




const apiBaseService = {
  get: async (url, params = {}) => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },



  post: async (url, data = {}) => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  put: async (url, data = {}) => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  delete: async (url) => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

// Error handling function
const handleError = (error) => {
  console.error('API Error:', error);
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
  }
  throw error; // Re-throw error so it can be caught in specific requests
};

export default apiBaseService;
