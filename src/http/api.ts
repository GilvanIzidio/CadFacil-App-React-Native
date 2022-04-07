import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 4000,
  timeoutErrorMessage: 'Network Error',
});

export default api;
