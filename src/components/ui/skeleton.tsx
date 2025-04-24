import type { ComponentProps, FC } from 'react';

import { cn } from '@/lib/utils';

const Skeleton: FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return (
    <div
      className={cn('bg-accent animate-pulse rounded-md', className)}
      data-slot='skeleton'
      {...props}
    />
  );
};

export { Skeleton };
