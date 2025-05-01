import type { FC } from 'react';

import { IDS } from '@/utils/constants';

import { SignInForm } from './components/form/sign-in-form';

export const SignInPage: FC = () => {
  return (
    <main className='pt-16' id={IDS.PAGE.SIGN_IN}>
      <div className='bg-background container mx-auto flex max-w-sm flex-col gap-6 rounded-md p-8 shadow-[0px_16px_48px_0px_#0000002D]'>
        <h3 className='text-[28px] font-medium'>Log In</h3>
        <SignInForm />
      </div>
    </main>
  );
};
