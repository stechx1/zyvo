/* eslint-disable @next/next/no-img-element */
'use client';
import { Modal } from 'antd';
import { Button } from '@/components';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { auth } from '@/firebase';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
} from 'firebase/auth';
export const RegisterModal = ({ switchModal, closeModal, signupModal }) => {
  const [open, setOpen] = useState(true);
  const [cred, setCred] = useState({ email: '', password: '' });

  const onchange = (e) => {
    setCred({ ...cred, [e.currentTarget.name]: e.currentTarget.value });
  };

  const cancelButtonRef = useRef(null);
  const handleSignup = async (e) => {
    if (cred.email !== '' || cred.password !== '') {
      e.preventDefault();
      const Newuser = await createUserWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      )
        .then((userCred) => {
          handleClose();
          router.push('/welcome');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          } else if (error.code === 'auth/wrong-password') {
            alert('Please Enter Valid Credentials');
          } else if (error.code === 'auth/weak-password') {
            alert('Please Enter Valid Credentials');
          } else {
            alert(error);
          }
        });
    } else {
      alert('Fill all the fields!');
    }
  };

  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        setOpen(false);
        router.push('/welcome');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebookSignin = async (e) => {
    e.preventDefault();
    const facebookProvider = new FacebookAuthProvider();
    await signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setOpen(false);
        router.push('/welcome');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTwitterSignin = async (e) => {
    e.preventDefault();
    const twitterProvider = new TwitterAuthProvider();
    await signInWithPopup(auth, twitterProvider)
      .then((result) => {
        setOpen(false);
        router.push('/welcome');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal
      open={signupModal}
      onCancel={closeModal}
      footer={null}
    >
      <div className='mt-3 flex flex-col gap-4 w-full sm:mt-0 sm:text-left'>
        <span className='text-black text-[30px] font-medium text-center'>
          Sign up or Log in
        </span>
        <input
          type='email'
          placeholder='Email'
          name='email'
          id='email'
          onChange={onchange}
          className='border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          id='password'
          onChange={onchange}
          className='border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6'
        />
        <button
          onClick={handleSignup}
          className='bg-primary border text-[18px] border-primary hover:bg-white px-6 py-3  rounded-full'
        >
          Create Account
        </button>
        <hr />

        <div className='flex flex-col items-center gap-4 my-10'>
          <span>OR REGISTER WITH</span>
          <div className='flex gap-5'>
            <img
              src='/icons/google.svg'
              alt='as'
              className='cursor-pointer'
              onClick={handleGoogleSignup}
            />
            <img
              src='/icons/facebook.svg'
              className=' cursor-pointer'
              onClick={handleFacebookSignin}
              alt='as'
            />
            <img
              src='/icons/twitter.svg'
              className=' cursor-pointer'
              onClick={handleTwitterSignin}
              alt='as'
            />
          </div>
        </div>

        <hr />

        <div className='flex flex-col gap-4 my-10'>
          <span className='text-[20px] text-black font-medium text-center'>
            Already have an account?
          </span>

          <button
            onClick={switchModal}
            className='hover:bg-primary border hover:border-primary border-gray-400 text-[18px] bg-white px-6 py-3  rounded-full'
          >
            Login Here
          </button>
        </div>
      </div>
    </Modal>
  );
};
