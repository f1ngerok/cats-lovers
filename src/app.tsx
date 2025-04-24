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
} from '@/routes';
import { ArticlesPage } from '@/routes/article/list/page';
import { ROUTES } from '@/utils/constants/routes';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: ArticlesPage },
      { path: ROUTES.ABOUT, Component: AboutPage },
      { path: ROUTES.SIGN_IN, Component: SignInPage },
      { path: ROUTES.ARTICLES_DETAIL, Component: ArticleDetailPage },

      { path: ROUTES.ARTICLES_EDIT, Component: ArticleEditPage },
      { path: ROUTES.ARTICLE_CREATE, Component: ArticleCreatePage },

      { path: '*', Component: ErrorPage },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
