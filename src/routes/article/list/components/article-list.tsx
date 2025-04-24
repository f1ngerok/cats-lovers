import type { FC } from 'react';

import { Link } from 'react-router';

import { Button } from '@/components/ui';
import { useArticleListContext } from '@/routes/article/list/context';
import { IDS } from '@/utils/constants';

import { NoMoreArticles } from './no-more-articles';

export const ArticleList: FC = () => {
  const { articles, canLoadMore, loadMoreArticles } = useArticleListContext();

  return (
    <section className='flex flex-col gap-8' id={IDS.ARTICLE.LIST}>
      {articles.map(article => (
        <Link
          key={article.articleId}
          className='flex h-64 max-w-215 items-start gap-6'
          id={IDS.ARTICLE.ITEM}
          to={`/article/${article.articleId}`}
        >
          <div className='h-full max-w-68'>
            <img
              alt='Article 1 image'
              className='h-full w-full rounded-xs object-cover'
              src='https://picsum.photos/760/500'
            />
          </div>

          <div className='flex max-w-140 flex-col gap-4'>
            <h4 className='text-2xl font-medium'>{article.title}</h4>

            <p className='text-sm text-gray-500'>
              Elisabeth Strain
              <span className='mx-2'>•</span>
              <time dateTime='2017-02-13'>02/13/17</time>
            </p>

            <p className='text-base font-normal text-black'>{article.perex}</p>

            <div className='flex items-center gap-1'>
              <Button className='text-blue-600' variant='link'>
                Read more
              </Button>
              <p className='text-sm text-gray-500'>4 comments</p>
            </div>
          </div>
        </Link>
      ))}

      {canLoadMore ? (
        <Button
          className='mx-auto w-50'
          variant='secondary'
          onClick={loadMoreArticles}
        >
          Load more
        </Button>
      ) : (
        <NoMoreArticles />
      )}
    </section>
  );
};
