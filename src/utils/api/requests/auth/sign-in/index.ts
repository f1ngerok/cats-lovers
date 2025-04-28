import { api } from '@/utils/api';

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export const signIn = (payload: SignInRequest) => {
  return api.post('/auth/login', payload);
};
