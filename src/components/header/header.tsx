import type { FC } from 'react';

import { Navbar } from '@/components';
import { HeaderActions } from '@/components/header';

export const Header: FC = () => {
  return (
    <header className='flex h-14 items-center justify-center bg-[#F8F9FA]'>
      <div className='layout flex items-center justify-between'>
        <Navbar />
        <HeaderActions />
      </div>
    </header>
  );
};
