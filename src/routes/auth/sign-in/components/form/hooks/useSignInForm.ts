import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { SignInRequest } from '@/utils/api/requests/auth/sign-in';

import { useSignInMutation } from '@/utils/api/hooks';
import { STORE } from '@/utils/constants';
import { ROUTES } from '@/utils/constants';

import { signInFormSchema } from '../constants';

export const useSignInForm = () => {
  const navigate = useNavigate();
  const signInMutation = useSignInMutation();

  const signInForm = useForm<SignInRequest>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await signInMutation
      .mutateAsync(signInForm.getValues())
      .then(({ data }) => {
        Cookies.set(STORE.COOKIES.AUTH_TOKEN_KEY, data.access_token, {
          expires: data.expires_in,
        });

        const requestedRoute = localStorage.getItem(
          STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY
        );

        if (requestedRoute) {
          localStorage.removeItem(STORE.LOCAL_STORAGE.REQUESTED_ROUTE_KEY);
          navigate(requestedRoute);
        } else {
          navigate(ROUTES.HOME);
        }
      });
  };

  return {
    form: signInForm,
    state: {
      loading: signInForm.formState.isSubmitting,
    },
    functions: {
      onSubmit,
    },
  };
};
