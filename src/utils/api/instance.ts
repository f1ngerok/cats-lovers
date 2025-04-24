import axios, { AxiosHeaders } from 'axios';

export const api = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 10_000,
  headers: new AxiosHeaders({
    'X-API-KEY': process.env.API_SECRET_KEY,
  }),
});
