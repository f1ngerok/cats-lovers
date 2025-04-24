import type { FC } from 'react';

export const NoMoreArticles: FC = () => {
  return (
    <div className='flex flex-col items-center gap-2 py-8 text-center'>
      <p className='text-lg font-medium'>You&apos;ve reached the end!</p>
      <p className='text-muted-foreground text-sm'>
        That&apos;s all the articles we have for now.
      </p>
    </div>
  );
};
