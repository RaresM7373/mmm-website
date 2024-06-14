'use client';

const ContactUs = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-24 md:flex-row md:px-8 xl:px-0'>
      <div className='md:w-1/2'>
        <h1 className='text-center text-4xl font-bold text-white md:text-left'>
          Contact Us
        </h1>
        <p className='mt-4 hidden text-center text-white md:block md:text-left'>
          Dacă sunteți interesat să faceți publicitate prin{' '}
          <span className='font-semibold text-yellow-500'>MMM Advertising</span>
          , completați formularul și noi vă vom contacta.
        </p>
      </div>
      <div className='mt-8 w-full max-w-md rounded-md bg-gray-700 p-8 md:mt-0 md:w-1/2'>
        <form className='w-full'>
          <div className='mb-4'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-300'
            >
              First name
            </label>
            <input
              type='text'
              id='first-name'
              name='first-name'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium text-gray-300'
            >
              Last name
            </label>
            <input
              type='text'
              id='last-name'
              name='last-name'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300'
            >
              Email address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='user-type'
              className='block text-sm font-medium text-gray-300'
            >
              Ce tip de utilizator esti?
            </label>
            <input
              type='text'
              id='user-type'
              name='user-type'
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
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
              className='mt-1 block w-full rounded-md border-gray-300 bg-gray-800 text-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm'
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-full rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
