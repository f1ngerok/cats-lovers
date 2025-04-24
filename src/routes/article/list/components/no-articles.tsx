import type { FC } from 'react';

import { Link } from 'react-router';

import { Button } from '@/components/ui';
import { ROUTES } from '@/utils/constants';

export const NoArticles: FC = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-8 text-center'>
      <p className='text-lg font-medium'>No articles yet</p>
      <p className='text-muted-foreground text-sm'>
        Create your first article to get started
      </p>
      <Button asChild>
        <Link to={ROUTES.ARTICLE_CREATE}>Create Article</Link>
      </Button>
    </div>
  );
};
