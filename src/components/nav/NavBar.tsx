'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { Sling as Hamburger } from 'hamburger-react';

import Logo from '../../../public/assets/text-galben-png-3@2x.png';
import { MobileMenu } from './MobileMenu';

export const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const offset = window.scrollY;
      setScrolled(offset > 125);
    });
  }, []);

  return (
    <nav
      className={classNames(
        'fixed top-0 z-50 flex h-24 w-full items-center justify-between px-8 transition-all xl:px-24',
        {
          'bg-transparent': !scrolled,
          'border-b border-gray-300 bg-white': scrolled,
        }
      )}
    >
      <Image src={Logo} alt={'MMM Logo'} className='h-14 w-auto xl:block' />
      <div className='block xl:hidden'>
        <Hamburger toggled={isOpened} toggle={setIsOpened} color='#FDDD60' />
        <MobileMenu onClose={() => setIsOpened(false)} opened={isOpened} />
      </div>
      <ul
        id='nav-list'
        className='[&>li>a]:text-tcolor hidden w-80 list-none text-center xl:table [&>li>a]:font-primary [&>li>a]:font-bold [&>li>a]:uppercase [&>li]:relative [&>li]:table-cell'
      >
        <li
          className={classNames('list-item', {
            'text-white': !scrolled,
            'text-black': scrolled,
          })}
        >
          <Link
            href='/'
            className={classNames({
              'text-white': !scrolled,
              'text-black': scrolled,
            })}
          >
            Acasa
          </Link>
        </li>
        <li
          className={classNames('list-item', {
            'text-white': !scrolled,
            'text-black': scrolled,
          })}
        >
          <Link
            href='/contact'
            className={classNames({
              'text-white': !scrolled,
              'text-black': scrolled,
            })}
          >
            Pentru clienti
          </Link>
        </li>
        <li
          className={classNames('list-item', {
            'text-white': !scrolled,
            'text-black': scrolled,
          })}
        >
          <Link
            href='/offers'
            className={classNames({
              'text-white': !scrolled,
              'text-black': scrolled,
            })}
          >
            Oferte
          </Link>
        </li>
      </ul>
    </nav>
  );
};
