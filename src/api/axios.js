import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v2/hrsupport',
});

export default api;
