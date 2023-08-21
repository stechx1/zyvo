/* eslint-disable @next/next/no-img-element */
'use client';
import {
  DetailsSection,
  HeroSection,
  ItsAll,
  SetsApartSection,
  ShortTermSection,
} from '@/collections';

import { useState, useEffect } from 'react';
import { auth } from '@/firebase';

import { RegisterModal } from '@/components/Modal/AntdModal/Register';

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      <div className='md:space-y-28 space-y-12'>
        <DetailsSection
          setSignupModal={setSignupModal}
        />
        <ShortTermSection />
        <SetsApartSection />
        {!auth?.currentUser && <ItsAll setSignupModal={setSignupModal} />}
      </div>
      <RegisterModal
        signupModal={SignupModal}
        switchModal={switchModal}
        closeModal={closeModal}
      />
    </>
  );
}
