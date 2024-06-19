'use client';

import React, { useMemo } from 'react';
import '../../styles/navbar.css';
import Link from 'next/link';

type Props = {
  opened: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ opened, onClose }: Props) => {
  const classes = useMemo(() => {
    return `nav-menu bg-bg ${opened ? 'opened' : ''}`;
  }, [opened]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={classes}>
      <div className='flex h-full w-full flex-col items-center justify-center [&>p]:mb-8 [&>p]:cursor-pointer [&>p]:font-playfair [&>p]:text-5xl [&>p]:font-bold [&>p]:text-black'>
        <Link
          onClick={handleClose}
          className='mb-16 text-center font-playfair text-5xl font-bold  text-primary-900'
          href='/'
        >
          Acasa
        </Link>
        <Link
          onClick={handleClose}
          className='mb-16 text-center font-playfair text-5xl font-bold  text-primary-900'
          href='/contact'
        >
          Clienti
        </Link>
        <Link
          onClick={handleClose}
          className='mb-16 text-center font-playfair text-5xl font-bold  text-primary-900'
          href='/offers'
        >
          Oferte
        </Link>
      </div>
    </div>
  );
};
