import type { FC } from 'react';

import { Link } from 'react-router';

import { Navbar } from '@/components';

export const Header: FC = () => {
  return (
    <header className='flex h-14 items-center justify-center bg-[#F8F9FA]'>
      <div className='layout flex items-center justify-between'>
        <Navbar />
        <Link to='/auth/sign-in'>Login</Link>
      </div>
    </header>
  );
};
