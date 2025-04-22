import type { FC } from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { Button } from '@/components/ui';
import { ArticleListLoader } from '@/routes/article/components/article-list';
import { IDS } from '@/utils/constants';

export const ArticleList: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <ArticleListLoader />;
  }

  return (
    <section className='flex flex-col gap-8' id={IDS.ARTICLE.LIST}>
      {new Array(2).fill(null).map((_, index) => (
        <Link
          key={index}
          className='flex h-64 max-w-215 items-start gap-6'
          id={IDS.ARTICLE.ITEM}
          to={`/article/${String(index + 1)}`}
        >
          <div className='h-full max-w-68'>
            <img
              alt='Article 1 image'
              className='h-full w-full rounded-xs object-cover'
              src='https://picsum.photos/760/500'
            />
          </div>

          <div className='flex max-w-140 flex-col gap-4'>
            <h4 className='text-2xl font-medium'>Why Do Cats Have Whiskers?</h4>

            <p className='text-sm text-gray-500'>
              Elisabeth Strain
              <span className='mx-2'>•</span>
              <time dateTime='2017-02-13'>02/13/17</time>
            </p>

            <p className='text-base font-normal text-black'>
              A cat&apos;s whiskers — or vibrissae — are a well-honed sensory
              tool that helps a cat see in the dark and steer clear of hungry
              predators. Whiskers are highly sensitive tactile hairs that grow
              in patterns on a cat&apos;s muzzle, above its eyes and elsewhere
              on its body, like the ears, jaw and forelegs
            </p>

            <div className='flex items-center gap-1'>
              <Button asChild className='text-blue-600' variant='link'>
                <Link to='/article/1'>Read more</Link>
              </Button>
              <p className='text-sm text-gray-500'>4 comments</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
