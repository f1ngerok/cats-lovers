import type { FC } from 'react';

import { IDS } from '@/utils/constants';

import { ArticleList } from './components';
import { ArticleListProvider } from './context/article-list-provider';

export const ArticlesPage: FC = () => {
  return (
    <main
      className='flex flex-col justify-between gap-10 py-10'
      id={IDS.PAGE.ARTICLES}
    >
      <h1 className='text-[40px] font-medium'>Recent articles</h1>

      <ArticleListProvider defaultArticles={[]}>
        <ArticleList />
      </ArticleListProvider>
    </main>
  );
};
