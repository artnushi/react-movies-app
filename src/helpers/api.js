import axios from 'axios';

const config = {
  baseURL: 'https://flowrspot-api.herokuapp.com/api/v1',
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