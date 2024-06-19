'use client';

import Image from 'next/image';
import heroImg from '../../../public/assets/hero.svg';

import Button from '../common/Button';

const HeroSection = () => {
  const handleLearnMore = () => {};
  const handleSignUp = () => {};

  return (
    <div id='hero-section' className='bg-hero-bg relative flex h-112 w-full'>
      <video autoPlay muted loop id='hero-video'>
        <source src='/assets/mmm-hero.mp4' type='video/mp4' />
      </video>
      <div className='z-10 box-border flex h-full w-full flex-col items-center justify-center px-8 xl:px-0 '>
        <h1 className='mb-10 text-center font-playfair text-5xl font-bold text-white xl:text-left'>
          O{' '}
          <span className='italic text-primary-500'>
            agentie de publicitate
          </span>{' '}
          pentru o lume moderna
        </h1>
        <p className='font-fairplay text-center text-white xl:text-left'>
          Partenerul tău strategic pentru vizibilitate și interacțiune de top
        </p>
        <div className='mt-8 flex flex-col xl:flex-row'>
          <Button onClick={handleLearnMore}>Start Campanie</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
