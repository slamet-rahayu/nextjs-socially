import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.BASE_API_URL || 'http://localhost:1337'
});
