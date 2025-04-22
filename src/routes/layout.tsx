import { Outlet } from 'react-router';

import { Header } from '@/components';
export const Layout = () => {
  return (
    <>
      <Header />
      <main className='layout'>
        <Outlet />
      </main>
    </>
  );
};
