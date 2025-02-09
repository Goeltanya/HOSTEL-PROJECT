import axios from 'axios';

// Set the base URL for the API
const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust according to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the auth token in request headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
