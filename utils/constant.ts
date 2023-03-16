import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
export const { baseURL } = publicRuntimeConfig;

export const API = {
  AUTH: {
    login: '/api/auth/local',
    register: '/api/auth/local/register'
  },
  USER: {
    profile: '/api/profile'
  },
  POST: {
    post: '/api/posts'
  }
};
