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
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUser, setUser, logout } from '@/store/context';

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const [localUser, setLocalUser] = useLocalStorage('localUser', '');
  const { user, isLoggedIn, dispatch } = useUser();

  useEffect(() => {
    console.log('Use effect ran');
  }, [isLoggedIn]);

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
        <DetailsSection isLoggedIn={isLoggedIn} setSignupModal={setSignupModal} />
        <ShortTermSection />
        <SetsApartSection />
        {!isLoggedIn && <ItsAll setSignupModal={setSignupModal} />}
      </div>
      <RegisterModal
        signupModal={SignupModal}
        switchModal={switchModal}
        closeModal={closeModal}
      />
    </>
  );
}
