'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';

import Logo from '../../../../public/assets/text-galben-png-3@2x.png';
import { MobileMenu } from './MobileMenu';

export const NavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className='fixed top-0 z-50 flex h-24 w-full items-center justify-between bg-transparent px-8 xl:px-24'>
      <Image src={Logo} alt={'MMM Logo'} className=' h-14 w-auto xl:block' />
      <div className='block xl:hidden'>
        <Hamburger toggled={isOpened} toggle={setIsOpened} color='#FDDD60' />
        <MobileMenu opened={isOpened} />
      </div>
      <ul
        id='nav-list'
        className='hidden w-80 list-none text-center xl:table [&>li>a]:font-primary [&>li>a]:font-bold [&>li>a]:uppercase [&>li>a]:text-tcolor [&>li]:relative [&>li]:table-cell'
      >
        <li className='list-item'>
          <a href='#'>Acasa</a>
        </li>
        <li className='list-item'>
          <a href='#'>Pentru Soferi</a>
        </li>
        <li className='list-item'>
          <a href='#'>Pentru clienti</a>
        </li>
      </ul>
    </nav>
  );
};
