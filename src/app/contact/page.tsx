'use client';

import Button from '@/components/common/Button';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-24 md:flex-row md:px-8 xl:px-0'>
      <div className='mt-8 w-full max-w-md rounded-md  p-8 md:mt-0 md:w-1/2'>
        <h1 className='mb-16 text-center text-5xl font-bold  text-primary-900'>
          Contact Us
        </h1>
        <form className='w-full'>
          <div className='mb-4'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-300'
            >
              Nume
            </label>
            <input
              type='text'
              id='first-name'
              name='first-name'
              placeholder='Nume si prenume'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-200 p-4 text-black shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Introducei adresa de mail'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-200 p-4 text-black shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-300'
            >
              Informatii utile
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-200 text-black shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <Button
              style='w-full'
              onClick={() => {
                ('');
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className='hidden xl:block xl:pl-24'>
        <img src='/assets/map.svg' alt='Map image' />
      </div>
    </div>
  );
};

export default ContactUs;
