import React from 'react';

import Image from 'next/image';
import FbIcon from '../../../../public/assets/facebook-icon.svg';
import TwitterIcon from '../../../../public/assets/twitter-icon.svg';
import InstaIcon from '../../../../public/assets/instagram-icon.svg';

const MeetTheTeam = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-bg px-8 py-24 xl:px-0'>
      <p className='mb-2 font-primary text-xl text-primary-500'>
        - Cine suntem ? -
      </p>
      <h1 className='mb-16 text-center font-playfair text-5xl font-bold text-primary-900 text-white'>
        Intalneste echipa <br />
        din spatele{' '}
        <span className='italic text-primary-500'>MMM Adevertising</span>
      </h1>
      <div className='flex w-full flex-wrap justify-center'>
        <div className='mx-12 mb-12 flex flex-col'>
          <div className="mb-4 h-80 w-80 cursor-pointer rounded-xl bg-[url('/assets/tudor.jpeg')] bg-cover bg-center bg-no-repeat shadow-xl transition-all hover:scale-105"></div>
          <p className='font-primary text-3xl font-bold text-white'>
            Tudor Muresan
          </p>
          <p className='font-primary-500 mb-1 text-lg text-primary-500'>
            Co-Founder
          </p>
          <div className='flex items-center'>
            <Image src={FbIcon} alt='Facebook' className='mr-2 h-4 w-4' />
            <Image src={TwitterIcon} alt='Twitter' className='mr-2 h-4 w-4' />
            <Image src={InstaIcon} alt='Instagram' className=' h-4 w-4' />
          </div>
        </div>
        <div className='mx-12 mb-12 flex flex-col'>
          <div className="mb-4 h-80 w-80 cursor-pointer rounded-xl bg-[url('/assets/razvan.jpeg')] bg-cover bg-center bg-no-repeat shadow-xl transition-all hover:scale-105"></div>
          <p className='font-primary text-3xl font-bold text-white'>
            Razvan Marginean
          </p>
          <p className='text-primary mb-1 font-primary text-lg text-primary-500'>
            Co-Founder
          </p>
          <div className='flex items-center'>
            <Image src={FbIcon} alt='Facebook' className='mr-2 h-4 w-4' />
            <Image src={TwitterIcon} alt='Twitter' className='mr-2 h-4 w-4' />
            <Image src={InstaIcon} alt='Instagram' className=' h-4 w-4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
