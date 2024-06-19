import React from 'react';
import Image from 'next/image';

import icon1 from '../../../../public/assets/eye.png';
import icon2 from '../../../../public/assets/target.png';
import icon3 from '../../../../public/assets/agility.png';

const DemoSection = () => {
  return (
    <div className='relative  flex w-full flex-col items-center bg-bgDark px-8 py-24 xl:px-0'>
      <h1 className='mb-124 font-italic mb-24 text-center  font-playfair text-5xl font-bold text-primary-900'>
        De ce sa alegi MMM ?
      </h1>
      <div className='mb-16 flex w-full flex-col items-center justify-around xl:flex-row'>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon1} alt='Icon 1' className='mb-5 h-20 w-20' />
          <p className='mb-2 font-primary text-lg font-bold text-black'>
            1. Vizbilitate
          </p>
          <p className='text-md text-center font-primary text-black'>
            Taxiurile noastre parcurg întregul oraș, expunând reclama dvs.
            zilnic la mii de persoane, de la districtele de afaceri la zonele
            rezidențiale.
          </p>
        </div>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon2} alt='Icon 1' className='mb-5 h-20 w-20' />
          <p className='mb-2 font-primary text-lg font-bold text-black'>
            2. Impact targetat
          </p>
          <p className='text-md text-center font-primary text-black'>
            Cu MMM, reclamele tale nu doar că se văd, ci și captează atenția.
            Selecționăm strategic rutele și timpurile pentru a-ți plasa brandul
            în fața publicului potrivit, exact când trebuie.
          </p>
        </div>
        <div className='mb-16 flex max-w-xs  flex-col items-center xl:mb-0'>
          <Image src={icon3} alt='Icon 1' className='mb-5 h-20 w-20' />
          <p className='mb-2 font-primary text-lg font-bold text-black'>
            3. Flexibilitate și Control
          </p>
          <p className='text-md text-center font-primary text-black'>
            De la campanii pe termen scurt la mesaje sezoniere, platforma
            noastră oferă flexibilitatea de a-ți schimba mesajul conform
            nevoilor tale de marketing. Actualizările instantanee și afișajele
            digitale asigură că conținutul tău este mereu actual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
