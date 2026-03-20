import axios from 'axios';

const backendUrl = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');
export const API_BASE_URL = backendUrl ? `${backendUrl}/api` : '/api';

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('ican_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('ican_token');
      localStorage.removeItem('ican_user');
      window.location.href = '/';
    }
    return Promise.reject(err);
  }
);

export default API;
