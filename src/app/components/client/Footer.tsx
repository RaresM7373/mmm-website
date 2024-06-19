'use client';

import { useEffect, useState } from 'react';
import Button from '../common/Button';

const Footer = () => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <footer className='w-full bg-bg'>
      <div className='border-1 flex w-full flex-col items-center justify-between border-t border-solid border-tcolor px-8 py-6 sm:flex-row sm:px-24'>
        <h1 className='mb-4 font-playfair text-4xl font-bold text-black sm:mb-0'>
          MMM Adevertising.
        </h1>
        <p className='text-md font-primary font-thin text-black'>
          &copy; {date} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
