import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  }
};

export const api = axios.create(config);

api.interceptors.request.use((config) => {
  try {
    let token = localStorage.getItem('auth_token');

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config;
  } catch (e) {
    console.log('error on api call', e);
  }

});


export default api;