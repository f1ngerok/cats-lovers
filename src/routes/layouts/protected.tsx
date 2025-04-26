import type { FC } from 'react';

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import { STORE } from '@/utils/constants';
import { ROUTES } from '@/utils/constants/routes';

export const ProtectedLayout: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!Cookies.get(STORE.COOKIES.AUTH_TOKEN_KEY)) {
      localStorage.setItem(STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY, pathname);
      navigate(ROUTES.SIGN_IN);
    }
  }, []);

  return <Outlet />;
};
