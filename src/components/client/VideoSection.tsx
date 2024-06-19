'use client';

import React from 'react';
import Button from '../common/Button';

export const VideoSection = () => {
  return (
    <section className='flex h-videoMobile w-full flex-col items-center bg-bgContrast px-12 py-12 text-white xl:h-auto xl:flex-row xl:py-36'>
      <div className='relative flex h-full w-full items-center justify-center p-4 xl:w-1/2'>
        <video
          playsInline
          autoPlay
          muted
          loop
          onContextMenu={() => false}
          className='h-full w-full rounded-lg object-cover'
          preload='auto'
          id='specs-video'
        >
          <source src='/assets/specs.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='mt-8 flex h-full w-full flex-col justify-center p-4 xl:mt-0 xl:w-1/2 xl:pl-16'>
        <h2 className='text-4xl  font-bold  leading-tight xl:text-5xl'>
          <span className='font-playfair italic text-primary-500'>
            Maximizează
          </span>{' '}
          expunerea{' '}
          <span className='font-playfair italic text-primary-500'>
            brandului
          </span>{' '}
          tău
        </h2>
        <p className='mb-16 mt-4 text-lg   xl:text-xl'>
          expunerea brandului tău cu ecranele noastre duale de 96 cm x 32 cm,
          care acceptă formate MP4, MOV, GIF, PNG, JPG și HEIC și permit reclame
          captivante de 6–8 secunde.
        </p>
        <Button type='outlined' onClick={() => {}}>
          See all features
        </Button>
      </div>
    </section>
  );
};
