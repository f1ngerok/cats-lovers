import type { FC } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  Layout,
  ArticleDetailPage,
  ErrorPage,
  ArticleCreatePage,
  ArticleEditPage,
  SignInPage,
  AboutPage,
  ProtectedLayout,
} from '@/routes';
import { ArticlesPage } from '@/routes/article/list/page';
import { SignOutPage } from '@/routes/auth/sign-out/page';
import { ROUTES } from '@/utils/constants/routes';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: ArticlesPage },
      { path: ROUTES.ABOUT, Component: AboutPage },
      { path: ROUTES.SIGN_IN, Component: SignInPage },
      { path: ROUTES.ARTICLE_DETAIL, Component: ArticleDetailPage },

      {
        Component: ProtectedLayout,
        children: [
          { path: ROUTES.ARTICLE_EDIT, Component: ArticleEditPage },
          { path: ROUTES.ARTICLE_CREATE, Component: ArticleCreatePage },
          { path: ROUTES.SIGN_OUT, Component: SignOutPage },
        ],
      },

      { path: '*', Component: ErrorPage },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
