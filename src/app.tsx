import type { FC } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  Layout,
  ArticleDetailPage,
  ArticlesPage,
  ErrorPage,
  ArticleCreatePage,
  ArticleEditPage,
  SignInPage,
  AboutPage,
} from '@/routes';
import { ROUTES } from '@/utils/constants/routes';

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: ArticlesPage },
      { path: 'article/:articleId', Component: ArticleDetailPage },
      { path: ROUTES.SIGN_IN, Component: SignInPage },
      { path: ROUTES.ABOUT, Component: AboutPage },

      { path: 'article/:articleId/edit', Component: ArticleEditPage },
      { path: ROUTES.ARTICLE_CREATE, Component: ArticleCreatePage },

      { path: '*', Component: ErrorPage },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
