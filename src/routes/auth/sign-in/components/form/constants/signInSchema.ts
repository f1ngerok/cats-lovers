import { z } from 'zod';

import type { SignInRequest } from '@/utils/api/requests/auth/sign-in';

export const signInFormSchema = z.object<
  Record<keyof SignInRequest, z.ZodType<SignInRequest[keyof SignInRequest]>>
>({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
