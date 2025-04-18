import type { FC } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    index: true,
    element: <div>Hello World!</div>,
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
