'use client';

import Image from 'next/image';
import firmwareImage from '../../../../public/assets/firmware.svg';
import environmentIcon from '../../../../public/assets/environment.png';
import checkIcon from '../../../../public/assets/check-circle.png';

const OurMission = () => {
  return (
    <div className=' mt-44 flex min-h-112 w-full flex-col-reverse px-0 xl:mt-0 xl:flex-row xl:px-24'>
      <div className='flex w-full items-center justify-center xl:w-1/2'>
        <div className='flex w-fit flex-col items-center px-8 xl:items-start xl:px-0'>
          <p className='mb-4 font-primary text-xl text-primary-500'>
            - Misiunea noastra -
          </p>
          <h1 className='mb-16 text-center font-playfair text-3xl font-bold text-primary-900 xl:text-left'>
            Învățare ghidată de inteligenta artificiala. <br />
            Partenerul <span className='italic text-primary-500'>
              perfect
            </span>{' '}
            pentru examenul de{' '}
            <span className='italic text-primary-500'>bac</span>.
          </h1>
          <div className='flex items-start'>
            <Image
              src={environmentIcon}
              alt='Environment'
              className='mr-6 h-12 w-12'
            />
            <div className='mb-10 flex max-w-xs flex-col'>
              <p className='font-primary text-xl font-bold text-primary-500'>
                Mediu online
              </p>
              <p className='font-primary text-lg text-tcolor'>
                Lorem ipsum dolor sit amet, consecteturor adipiscing elit.
                Tincidunt donec vulputate ipsum erat lorem ipsum.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <Image
              src={checkIcon}
              alt='Environment'
              className='mr-6 h-12 w-12'
            />
            <div className='mb-10 flex max-w-xs flex-col'>
              <p className='font-primary text-xl font-bold text-primary-500'>
                Asistenta & evaluari
              </p>
              <p className='font-primary text-lg text-tcolor'>
                Lorem ipsum dolor sit amet, consecteturor adipiscing elit.
                Tincidunt donec vulputate ipsum erat lorem ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-92 mb-40 flex w-full items-center justify-center px-8 xl:mb-0 xl:w-1/2 xl:px-0'>
        <Image src={firmwareImage} alt='AI' className='w-100' />
      </div>
    </div>
  );
};

export default OurMission;
