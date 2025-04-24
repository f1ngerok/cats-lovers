import type { FC } from 'react';

import { Outlet } from 'react-router';

import { Header } from '@/components';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='layout'>
        <Outlet />
      </main>
    </>
  );
};
