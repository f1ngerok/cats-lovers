import type { FC, ComponentProps } from 'react';

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const NavigationMenu: FC<
  ComponentProps<typeof NavigationMenuPrimitive.Root>
> = ({ className, children, ...props }) => {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className
      )}
      data-slot='navigation-menu'
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
};

const NavigationMenuList: FC<
  ComponentProps<typeof NavigationMenuPrimitive.List>
> = ({ className, ...props }) => {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className
      )}
      data-slot='navigation-menu-list'
      {...props}
    />
  );
};

type NavigationMenuItemProps = ComponentProps<
  typeof NavigationMenuPrimitive.Item
>;
const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
  className,
  ...props
}) => {
  return (
    <NavigationMenuPrimitive.Item
      className={cn('relative', className)}
      data-slot='navigation-menu-item'
      {...props}
    />
  );
};

const navigationMenuTriggerStyle = cva(
  'group inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-base font-normal hover:underline hover:underline-offset-4 disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[1px] focus-visible:outline-1'
);

type NavigationMenuLinkProps = ComponentProps<
  typeof NavigationMenuPrimitive.Link
>;
const NavigationMenuLink: FC<NavigationMenuLinkProps> = ({
  className,
  ...props
}) => {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'data-[active=true]:text-medium flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:underline hover:underline-offset-4 focus-visible:ring-[1px] focus-visible:outline-1',
        className
      )}
      data-slot='navigation-menu-link'
      {...props}
    />
  );
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
};
