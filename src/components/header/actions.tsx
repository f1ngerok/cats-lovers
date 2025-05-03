import type { FC } from 'react';

import { Link } from 'react-router';

import { ArrowForwardIcon } from '@/assets/svg';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
import { ROUTES } from '@/utils/constants';
import { useUserContext } from '@/utils/contexts/user/useUserContext';

export const HeaderActions: FC = () => {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated) {
    return (
      <div className='flex items-center justify-between gap-10'>
        <Button asChild className='p-0' variant='link'>
          <Link to={ROUTES.HOME}>My Articles</Link>
        </Button>

        <Button asChild className='text-secondary-500 p-0' variant='link'>
          <Link to={ROUTES.ARTICLE_CREATE}>Create Article</Link>
        </Button>

        <Avatar>
          <AvatarImage src='https://i.pravatar.cc/150?img=1' />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    );
  }

  return (
    <Button asChild variant='link'>
      <Link to={ROUTES.SIGN_IN}>
        Login
        <ArrowForwardIcon className='text-inherit' />
      </Link>
    </Button>
  );
};
