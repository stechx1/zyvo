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
import {
  UserButton, useAuth, useUser
} from '@clerk/nextjs';
import { RegisterModal } from '@/components/Modal/AntdModal/Register';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const [localUser, setLocalUser] = useLocalStorage('localUser', '');
  const { isLoaded, isSignedIn, user } = useUser();

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
        <DetailsSection isLoggedIn={isSignedIn} setSignupModal={setSignupModal} />
        <ShortTermSection />
        <SetsApartSection />
        {!isSignedIn && <ItsAll setSignupModal={setSignupModal} />}
      </div>
      <RegisterModal
        signupModal={SignupModal}
        switchModal={switchModal}
        closeModal={closeModal}
      />
    </>
  );
}
