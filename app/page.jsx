/* eslint-disable @next/next/no-img-element */
import {
  DetailsSection,
  HeroSection,
  SetsApartSection,
  ShortTermSection,
} from '@/collections';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='bg-[url("/banner-bg.png")] bg-cover bg-center flex flex-col justify-center items-center '>
        <HeroSection />
      </div>
      <div className='space-y-28'>
        <DetailsSection />
        <ShortTermSection />
        <SetsApartSection />
      </div>
    </>
  );
}
