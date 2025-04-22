import type { FC } from 'react';

import { Link } from 'react-router';

import { Button } from '@/components/ui';
import { IDS } from '@/utils/constants';

export const ArticlesPage: FC = () => {
  return (
    <main
      className='flex flex-col justify-between gap-10 py-10'
      id={IDS.PAGE.ARTICLES}
    >
      <h1 className='text-[40px] font-medium'>Recent articles</h1>

      <section className='flex flex-col gap-8' id={IDS.ARTICLE.LIST}>
        <div
          className='flex max-w-4xl items-start justify-between gap-6'
          id={IDS.ARTICLE.ITEM}
        >
          <div className='max-w-66'>
            <img
              alt='Article 1 image'
              className='w-full'
              src='https://picsum.photos/200/300'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='text-2xl font-medium'>Why Do Cats Have Whiskers?</h4>

            <p className='text-sm text-gray-500'>
              Elisabeth Strain
              <span className='mx-2'>•</span>
              02/13/17
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
        </div>
      </section>
    </main>
  );
};
