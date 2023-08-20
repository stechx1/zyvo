import { Container } from '@/components';
import { poppins } from '@/utils/font';

/* eslint-disable @next/next/no-img-element */
export const ShortTermSection = () => {
  return (
    <Container>
      <div
        data-aos='fade-up'
        className='container mx-auto flex flex-col justify-center items-center gap-10'
      >
        <h2
          className={`md:text-5xl text-[22px] max-w-[815px] font-[500] md:leading-[62px] text-center ${poppins.className}`}
        >
          Find or offer spaces tailored to your{' '}
          <span className='text-primary'>short-term needs</span>.
        </h2>
        <img src='/pic3.png' alt='pic3' />
      </div>
    </Container>
  );
};
