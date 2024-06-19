'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  const offers = [
    {
      duration: '12 months',
      price: '1000 Eur + TVA',
      daily: '150 rulări/zi',
      total: '36000 rulări',
    },
    {
      duration: '6 months',
      price: '540 Eur + TVA',
      daily: '150 rulări/zi',
      total: '18000 rulări',
    },
    {
      duration: '1 month',
      price: '100 Eur + TVA',
      daily: '150 rulări/zi',
      total: '3000 rulări',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-24 xl:px-0'>
      <h1 className='mb-8 text-center text-4xl font-bold text-black'>Oferte</h1>
      <div className='hidden md:flex md:justify-center md:space-x-8'>
        {offers.map((offer, index) => (
          <div
            key={index}
            className='w-80 rounded-lg bg-yellow-400 p-10 shadow-lg'
          >
            <h2 className='text-center text-2xl font-bold'>{offer.duration}</h2>
            <p className='mt-4 text-center text-lg'>{offer.price}</p>
            <p className='text-center text-lg'>{offer.daily}</p>
            <p className='mt-2 text-center text-xl font-bold'>{offer.total}</p>
            <button className='mt-6 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'>
              Buy now
            </button>
          </div>
        ))}
      </div>
      <div className='w-full md:hidden'>
        <Slider {...settings}>
          {offers.length > 0
            ? offers.map((offer, index) => (
                <div key={index} className='p-2'>
                  <div
                    className={`rounded-lg bg-yellow-400 p-8 shadow-lg ${
                      index === 1 ? 'scale-105' : ''
                    }`}
                  >
                    <h2 className='text-center text-xl font-bold'>
                      {offer.duration}
                    </h2>
                    <p className='mt-4 text-center'>{offer.price}</p>
                    <p className='text-center'>{offer.daily}</p>
                    <p className='mt-2 text-center font-bold'>{offer.total}</p>
                    <button className='mt-6 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2'>
                      Buy now
                    </button>
                  </div>
                </div>
              ))
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;
