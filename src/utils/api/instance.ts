import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 10_000,
});
