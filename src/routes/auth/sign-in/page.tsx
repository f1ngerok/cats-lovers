import type { FC } from 'react';

import { IDS } from '@/utils/constants';

import { SignInForm } from './components/form/sign-in-form';

export const SignInPage: FC = () => {
  return (
    <main className='pt-16' id={IDS.PAGE.SIGN_IN}>
      <SignInForm />
    </main>
  );
};
