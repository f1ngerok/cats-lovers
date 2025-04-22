import type { FC } from 'react';

import { Link } from 'react-router';

import { ArrowForwardIcon } from '@/assets/svg';
import { Navbar } from '@/components';
import { Button } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

export const Header: FC = () => {
  return (
    <header className='flex h-14 items-center justify-center bg-[#F8F9FA]'>
      <div className='layout flex items-center justify-between'>
        <Navbar />
        <Button asChild className='text-blue-600' variant='link'>
          <Link to={ROUTES.SIGN_IN}>
            Login
            <ArrowForwardIcon className='text-inherit' />
          </Link>
        </Button>
      </div>
    </header>
  );
};
