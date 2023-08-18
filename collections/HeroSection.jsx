/* eslint-disable @next/next/no-img-element */
export const HeroSection = () => {
  return (
      <div
        data-aos='fade-up'
        className='max-w-[736px] text-center space-y-6 py-60'
      >
        <h1 className='text-7xl font-bold leading-[84px]'>
          Unlock a World of Hourly Spaces
        </h1>
        <p className='text-2xl'>The leading platform for hourly rentals</p>
        <div className='flex gap-6 justify-center items-center'>
          <img
            className='max-w-[52px] max-h-[45px]'
            src='/icons/clock.svg'
            alt='clock'
          />
          <img src='/icons/plus.svg' alt='plus' />
          <img
            className='max-w-[52px] max-h-[45px]'
            src='/icons/lock.svg'
            alt='lock'
          />
          <img src='/icons/plus.svg' alt='plus' />
          <img
            className='max-w-[52px] max-h-[45px]'
            src='/icons/home.svg'
            alt='home'
          />
        </div>
    </div>
  );
};
