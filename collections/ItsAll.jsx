import { Button } from '@/components';

/* eslint-disable @next/next/no-img-element */
export const ItsAll = ({setSignupModal}) => {
  return (
    <div
      data-aos='fade-up'
      className='mb-28 flex justify-center items-center flex-col gap-6'
    >
      <img src='/icons/icon.png' alt='home' className='h-[70px]' />
      <h2 className='text-5xl max-w-[815px] font-[500] leading-[62px] text-center'>
        It&apos;s all on ZYVO!
      </h2>
      <Button onClick={() => setSignupModal(true)}>Join the club</Button>
      <div className='mb-28'></div>
    </div>
  );
};
