import type { FC } from 'react';

import { Outlet } from 'react-router';

export const ProtectedLayout: FC = () => {
  return <Outlet />;
};
