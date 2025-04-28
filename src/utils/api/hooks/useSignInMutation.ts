import type { AxiosResponse, AxiosError } from 'axios';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

import type {
  SignInRequest,
  SignInResponse,
} from '@/utils/api/requests/auth/sign-in';

import { signIn } from '@/utils/api/requests/auth/sign-in';

export const useSignInMutation = (
  settings?: MutationSettings<typeof signIn>
): UseMutationResult<
  AxiosResponse<SignInResponse>,
  AxiosError<ErrorResponse>,
  SignInRequest
> => {
  return useMutation({
    mutationFn: signIn,
    ...settings,
  });
};
