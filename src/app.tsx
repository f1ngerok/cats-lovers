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

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: ArticlesPage },
      { path: 'article/:articleId', Component: ArticleDetailPage },
      { path: 'auth/signin', Component: SignInPage },
      { path: 'about', Component: AboutPage },

      { path: 'article/:articleId/edit', Component: ArticleEditPage },
      { path: 'article/create', Component: ArticleCreatePage },

      { path: '*', Component: ErrorPage },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
