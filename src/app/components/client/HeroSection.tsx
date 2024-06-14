'use client';

import Image from 'next/image';
import heroImg from '../../../public/assets/hero.svg';

import Button from '../common/Button';

const HeroSection = () => {
  const handleLearnMore = () => {};
  const handleSignUp = () => {};

  return (
    <div id='hero-section' className='bg-hero-bg flex h-112 w-full'>
      <div className='box-border flex h-full w-full flex-col items-center justify-center px-8 xl:w-1/2 xl:items-start xl:px-0 xl:pl-24'>
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
          <Button onClick={handleLearnMore}>Start Campanie!</Button>
        </div>
      </div>
      <div className='hidden w-full items-center justify-center xl:flex xl:w-1/2'>
        {/* <Image src={heroImg} alt='Hero section image ' className=' w-104' /> */}
      </div>
    </div>
  );
};

export default HeroSection;
