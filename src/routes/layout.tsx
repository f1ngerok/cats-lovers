import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <div className='layout'>
        <Outlet />
      </div>
    </>
  );
};
