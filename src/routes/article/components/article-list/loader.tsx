import type { FC } from 'react';

import { Skeleton } from '@/components/ui';
import { IDS } from '@/utils/constants';

export const ArticleListLoader: FC = () => {
  return (
    <section className='flex flex-col gap-8' id={IDS.ARTICLE.LIST}>
      {new Array(3).fill(null).map((_, index) => (
        <div
          key={index}
          className='flex h-64 w-full max-w-215 items-start gap-6'
        >
          <Skeleton className='h-full w-68' />

          <div className='flex w-140 flex-col gap-4'>
            <Skeleton className='h-7 w-90' />
            <Skeleton className='h-5 w-45' />
            <Skeleton className='h-24 w-full' />
            <Skeleton className='h-7 w-50' />
          </div>
        </div>
      ))}
    </section>
  );
};
