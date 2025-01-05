import axios from 'axios';
import qs from 'qs';
import { addAxiosDateTransformer } from 'axios-date-transformer';
import { store } from '../store';

const _instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'http://localhost:3000/', // TODO: 변경하기
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params),
});

const axiosInstance = addAxiosDateTransformer(_instance);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.tokenObject.value.auth?.token;
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = `${window.location.origin.toString()}/logout`;
    } else return Promise.reject(error);
  }
);

export default axiosInstance;
