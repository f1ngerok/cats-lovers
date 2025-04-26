import type { FC } from 'react';

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

import { IDS, STORE } from '@/utils/constants';
import { ROUTES } from '@/utils/constants/routes';

export const SignInPage: FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: Implement actual login logic
    // For now, we'll just simulate a successful login
    const mockToken = 'mock_auth_token';
    Cookies.set(STORE.COOKIES.AUTH_TOKEN_KEY, mockToken, { expires: 7 }); // Token expires in 7 days

    // Check for saved route and redirect
    const requestedRoute = localStorage.getItem(
      STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY
    );
    console.error('SignInPage - Requested route:', requestedRoute);

    if (requestedRoute) {
      console.error('SignInPage - Redirecting to saved route:', requestedRoute);
      localStorage.removeItem(STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY);
      navigate(requestedRoute);
    } else {
      console.error('SignInPage - No saved route, redirecting to home');
      navigate(ROUTES.HOME);
    }
  };

  return (
    <main className='pt-16' id={IDS.PAGE.SIGN_IN}>
      <div className='m w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg'>
        <h2 className='text-center text-3xl font-bold'>Sign In</h2>
        <button
          className='w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </main>
  );
};
