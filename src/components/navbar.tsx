import type { FC, ReactNode } from 'react';

import { Link, useLocation } from 'react-router';

import logo from '@/assets/images/logo.png';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
} from '@/components/ui';
import { ROUTES } from '@/utils/constants';

interface NavbarItem {
  label: ReactNode;
  to: (typeof ROUTES)[keyof typeof ROUTES];
}

const navbarItems: NavbarItem[] = [
  { label: <img alt='Cat Lovers logo' src={logo} />, to: '/' },
  { label: 'Recent Articles', to: '/' },
  { label: 'About', to: '/about' },
];

export const Navbar: FC = () => {
  const { pathname } = useLocation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              asChild
              active={item.to === pathname}
              className={navigationMenuTriggerStyle()}
            >
              <Link to={item.to}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
