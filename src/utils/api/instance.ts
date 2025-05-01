import axios, { AxiosHeaders } from 'axios';
import Cookies from 'js-cookie';

import { STORE } from '@/utils/constants';

const headers = new AxiosHeaders({
  'X-API-KEY': process.env.API_SECRET_KEY,
});

const authToken = Cookies.get(STORE.COOKIES.AUTH_TOKEN_KEY);
if (authToken) {
  headers.set('Authorization', `Bearer ${authToken}`);
}

export const api = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 10_000,
  headers,
});
