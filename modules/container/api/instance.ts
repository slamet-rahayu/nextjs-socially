/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import axios from 'axios';
import { API } from 'utils/constant';
import { store } from '../redux/store';

const publicApi = [API.AUTH.login, API.AUTH.register];

export const api = axios.create({
  baseURL: process.env.BASE_API_URL || 'http://localhost:1337'
});

api.interceptors.request.use((config) => {
  const { jwt } = store.getState().auth.userData;
  if (jwt && config.url && !publicApi.includes(config.url)) {
    config.headers!.Authorization = `Bearer ${jwt}`;
  }
  return config;
});
