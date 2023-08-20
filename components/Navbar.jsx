'use client';
import { useState } from 'react';
import { Button } from './Button';
import { Login } from './Modal/Login';
import { Signup } from './Modal/Signup';
import { useRouter } from 'next/navigation';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
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
    <div className=' bg-white py-5 shadow-sm  '>
      <div className='container mx-auto flex justify-between'>
        <img
          src='/logo.svg'
          alt='logo'
          className='w-40 cursor-pointer'
          onClick={() => router.push('/')}
        />

        <div className='flex gap-5'>
          <Button onClick={() => router.push('/about')} type='secondary'>
            About Us
          </Button>
          <button
            onClick={() => {
              setSignupModal(true);
            }}
            className='bg-primary border border-primary hover:bg-white px-6  rounded-full'
          >
            Sign Up
          </button>
        </div>
      </div>
      
        <Signup visible={SignupModal} switchModal={switchModal} closeModal={closeModal} />
      

      {loginModal && (
        <Login switchModal={switchModal} closeModal={closeModal}  />
      )}
    </div>
  );
};

