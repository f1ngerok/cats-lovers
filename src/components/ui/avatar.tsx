import type { FC, ComponentProps } from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

const Avatar: FC<ComponentProps<typeof AvatarPrimitive.Root>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className
      )}
      data-slot='avatar'
      {...props}
    />
  );
};

const AvatarImage: FC<ComponentProps<typeof AvatarPrimitive.Image>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Image
      className={cn('aspect-square size-full', className)}
      data-slot='avatar-image'
      {...props}
    />
  );
};

const AvatarFallback: FC<ComponentProps<typeof AvatarPrimitive.Fallback>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      data-slot='avatar-fallback'
      {...props}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };
