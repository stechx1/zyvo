import { poppins } from '@/utils/font';

/* eslint-disable @next/next/no-img-element */
export const HeroSection = () => {
  return (
    <div
      data-aos='fade-up'
      className='max-w-[736px] mx-auto text-center space-y-6 py-60 relative'
    >
      <h1
        className={`md:text-7xl text-4xl font-[600] md:leading-[84px] ${poppins.className}`}
      >
        Unlock a World of Hourly Spaces
      </h1>
      <p className='md:text-2xl text-xl'>
        The leading platform for hourly rentals
      </p>
      <div className='flex gap-6 justify-center items-center'>
        <img
          className='md:max-w-[52px] md:max-h-[45px] w-[30px]'
          src='/icons/clock.svg'
          alt='clock'
        />
        <img src='/icons/plus.svg' alt='plus' />
        <img
          className='md:max-w-[52px] md:max-h-[45px] w-[30px] h-[30px]'
          src='/icons/lock.svg'
          alt='lock'
        />
        <img src='/icons/plus.svg' alt='plus' />
        <img
          className='md:max-w-[52px] md:max-h-[45px] w-[40px] h-[30px]'
          src='/icons/home.svg'
          alt='home'
        />

        <img
          src='/tilt-img1.png'
          alt='tilt'
          className='absolute lg:hidden w-[110px] bottom-[105px] right-[22px] '
        />
        <img
          src='/tilt-img2.png'
          alt='img2'
          className='absolute lg:hidden w-[110px] top-[28px] left-[32px]'
        />
      </div>
    </div>
  );
};
