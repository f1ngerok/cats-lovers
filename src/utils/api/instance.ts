import axios, { AxiosHeaders } from 'axios';

import { STORE } from '@/utils/constants';

const headers = new AxiosHeaders({
  'X-API-KEY': process.env.API_SECRET_KEY,
});

const authToken = localStorage.getItem(STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY);
if (authToken) {
  headers.set('Authorization', `Bearer ${authToken}`);
}

export const api = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 10_000,
  headers,
});
