/* eslint-disable @next/next/no-img-element */
'use client';
import {
  DetailsSection,
  HeroSection,
  ItsAll,
  SetsApartSection,
  ShortTermSection,
} from '@/collections';
import { useState } from 'react';
import { Login } from '@/components/Modal/Login';
import { Signup } from '@/components/Modal/Signup';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const router = useRouter();
  const switchModal = () => {
    if (loginModal) {
      setLoginModal(false);
      setSignupModal(true);
    } else {
      setLoginModal(true);
      setSignupModal(false);
    }
  };

  const closeModal = () => {
    setSignupModal(false);
    setLoginModal(false);
  };
  return (
    <>
      <div className='bg-[url("/banner-bg.png")] bg-cover bg-center flex flex-col justify-center items-center '>
        <HeroSection />
      </div>
      <div className='space-y-28'>
        <DetailsSection setSignupModal={setSignupModal} />
        <ShortTermSection />
        <SetsApartSection />
        <ItsAll setSignupModal={setSignupModal} />
      </div>
      <Signup
        visible={SignupModal}
        switchModal={switchModal}
        closeModal={closeModal}
      />
    </>
  );
}
