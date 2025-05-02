import type { FC } from 'react';

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { ROUTES, STORE } from '@/utils/constants';
import { useUserContext } from '@/utils/contexts/user/useUserContext';

export const SignOutPage: FC = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useUserContext();

  useEffect(() => {
    Cookies.remove(STORE.COOKIES.AUTH_TOKEN_KEY);
    setIsAuthenticated(false);
    navigate(ROUTES.HOME);
  }, [setIsAuthenticated, navigate]);

  return null;
};
