'use client';

import Button from '../common/Button';
import Image from 'next/image';

const LiveUsersCount = () => {
  const handleSignUp = () => {};

  const clients = [
    {
      src: '/assets/untold.jpeg',
      alt: 'Untold',
    },
    {
      src: '/assets/marden.jpeg',
      alt: 'Marden',
    },
    {
      src: '/assets/athletic_man.png',
      alt: 'Runner',
    },
    {
      src: '/assets/sptiale.png',
      alt: 'Hospitals',
    },
  ];

  return (
    <div className='flex w-full flex-col items-center px-8 py-24 xl:px-0'>
      <h1 className='mb-6 text-center font-playfair text-5xl font-bold text-white'>
        Clienti cu care colaboram
      </h1>

      <div className='flex flex-col items-center justify-center bg-bg px-4 py-8 text-white'>
        <div className='flex flex-wrap items-center justify-center gap-16'>
          {clients.map((client, index) => (
            <div
              key={index}
              className='flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white'
            >
              <Image src={client.src} alt={client.alt} width={96} height={96} />
            </div>
          ))}
        </div>
      </div>

      <Button onClick={handleSignUp}>Start Campanie</Button>
    </div>
  );
};

export default LiveUsersCount;
