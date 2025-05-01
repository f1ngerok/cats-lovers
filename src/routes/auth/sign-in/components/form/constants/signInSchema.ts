import { z } from 'zod';

import type { SignInRequest } from '@/utils/api/requests/auth/sign-in';

export const signInFormSchema = z.object<
  Record<keyof SignInRequest, z.ZodType<SignInRequest[keyof SignInRequest]>>
>({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
