'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-end bg-bgSecondary px-4 py-12 md:flex-row md:px-8 xl:px-24'>
      <div className='flex items-center justify-center md:w-1/2'>
        <Image
          src='/assets/logo-cube.png'
          alt='MMM Advertising Logo'
          width={125}
          height={125}
          className='h-auto w-auto'
        />
      </div>
      <div className='mt-8 flex flex-col items-center justify-center md:mt-0 md:w-1/2 md:items-start md:pl-32'>
        <h2 className='mb-4 text-3xl font-bold text-black'>Contact Us</h2>
        <ul className='flex flex-col items-center md:items-start '>
          <li className='mb-2 flex items-center text-black'>
            <FaFacebook className='mr-2' /> Facebook
          </li>
          <li className='mb-2 flex items-center text-black'>
            <FaInstagram className='mr-2' /> Instagram
          </li>
          <li className='mb-2 flex items-center text-black'>
            <FiPhone className='mr-2' /> +40768691986
          </li>
          <li className='mb-2 flex items-center text-black'>
            <FiMail className='mr-2' /> advertising@mmminvests.com
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
