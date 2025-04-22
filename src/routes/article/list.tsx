import type { FC } from 'react';

import { ArticleList } from '@/routes/article/components/article-list';
import { IDS } from '@/utils/constants';

export const ArticlesPage: FC = () => {
  return (
    <main
      className='flex flex-col justify-between gap-10 py-10'
      id={IDS.PAGE.ARTICLES}
    >
      <h1 className='text-[40px] font-medium'>Recent articles</h1>

      <ArticleList />
    </main>
  );
};
