import React from 'react';
// import Image from 'next/image';
// import videoThumbnail from '/path-to-your-video-thumbnail.jpg'; // Replace with the actual path to your video thumbnail
// import { PlayIcon } from '@heroicons/react/solid';

const FeatureSection = () => {
  return (
    <section className='bg-dark-blue flex w-full flex-col items-center px-4 py-12 text-white lg:flex-row lg:px-16'>
      <div className='relative w-full lg:w-1/2'>
        <video
          className='h-auto w-full rounded-lg'
          controls
          // poster={videoThumbnail}
        >
          <source src='/path-to-your-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 flex items-center justify-center'>
          {/* <PlayIcon className='h-16 w-16 text-white' /> */}
        </div>
      </div>
      <div className='mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-16'>
        <h2 className='text-4xl font-bold leading-tight lg:text-5xl'>
          Automate answers and workflows in minutes
        </h2>
        <p className='mt-4 text-lg lg:text-xl'>
          Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo
          consequat dignissim massa convallis ullamcorper ac a vulputate dis.
          Blandit maecenas blandit cras posuere gravida etiam.
        </p>
        <button className='text-dark-blue mt-8 rounded-full bg-white px-6 py-3 text-lg font-bold transition duration-300 ease-in-out hover:bg-gray-200 lg:text-xl'>
          See All Features
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
