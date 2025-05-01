import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

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
      username: '',
      password: '',
    },
  });

  const onSubmit = signInForm.handleSubmit(async () => {
    await signInMutation
      .mutateAsync(signInForm.getValues())
      .then(({ data }) => {
        Cookies.set(STORE.COOKIES.AUTH_TOKEN_KEY, data.access_token, {
          expires: data.expires_in,
        });

        const requestedRoute = sessionStorage.getItem(
          STORE.SESSION.REQUESTED_ROUTE_KEY
        );

        if (requestedRoute) {
          sessionStorage.removeItem(STORE.SESSION.REQUESTED_ROUTE_KEY);
          navigate(requestedRoute);
        } else {
          navigate(ROUTES.HOME);
        }
      })
      .catch(({ response }) => {
        toast.error(response?.data.message);
      });
  });

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
