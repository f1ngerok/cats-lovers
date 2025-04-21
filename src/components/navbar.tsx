import type { FC, ReactNode } from 'react';

import { Link } from 'react-router';

import logo from '@/assets/images/logo.png';
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
  return (
    <nav>
      <ul className='flex items-center gap-10'>
        {navbarItems.map((item, index) => (
          <li key={index}>
            <Link
              className='text=[#6C757D] active:text=[#212529] font-normal'
              to={item.to}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
