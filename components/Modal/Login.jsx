/* eslint-disable @next/next/no-img-element */
'use client';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { auth } from '@/firebase';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  TwitterAuthProvider
} from 'firebase/auth';
export function Login({ switchModal }) {
  
  const [open, setOpen] = useState(true);
  const [cred, setCred] = useState({ email: '', password: '' });

  const onchange = (e) => {
    setCred({ ...cred, [e.currentTarget.name]: e.currentTarget.value });
  };
  const cancelButtonRef = useRef(null);
  const handleLogin = async (e) => {
    if (cred.email !== '' || cred.password !== '') {
      e.preventDefault();
      const Newuser = await signInWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      )
        .then(() => {
          setOpen(false);
          router.push("/home")
          // router.push('/');
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            
            alert('Please Enter Valid Information');
          } else if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
            
          } else if (error.code === 'auth/wrong-password') {
            alert('Please Enter Valid Credentials');
            //   setIsLoading(false);
          } else {
            //   setIsLoading(false);
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
        router.push("/home")
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
        router.push("/home")
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
        router.push("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 flex flex-col gap-4 w-full sm:mx-4 sm:mt-0 sm:text-left'>
                      <span className='text-black text-[30px] font-medium text-center'>
                        Sign up or Log in
                      </span>
                      <input
                      onChange={onchange}
                      value={cred.email}
                        type='email'
                        placeholder='Email'
                        name='email'
                        id='email'
                        className='border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6'
                      />
                      <input
                      onChange={onchange}
                        type='password'
                        value={cred.password}
                        placeholder='Password'
                        name='password'
                        id='password'
                        className='border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6'
                      />
                      <button onClick={handleLogin} className='bg-primary border text-[18px] border-primary hover:bg-white px-6 py-3  rounded-full'>
                        Login
                      </button>
                      <div className='flex text-[18px] justify-between my-5'>
                        <div className='flex gap-2 items-center'>
                          <input
                            type='checkbox'
                            className='bg-[#e1e1e5] m-0 border-[3px] border-white rounded-full outline-1 outline-[#c4c4c4] outline checked:outline-primary checked:bg-primary focus:outline-primary focus:bg-primary'
                          />
                          <span>Keep me logged</span>
                        </div>

                        <span className=' cursor-pointer underline'>
                          Forget Password?
                        </span>
                      </div>
                      <hr />

                      <div className='flex flex-col items-center gap-4 my-10'>
                        <span>OR LOGIN WITH</span>
                        <div className='flex gap-5'>
                          <img
                            src='/icons/google.svg'
                            alt='as'
                            className='cursor-pointer'
                            onClick={handleGoogleSignup}
                          />
                          <img src='/icons/facebook.svg' className=' cursor-pointer' onClick={handleFacebookSignin} alt='as' />
                          <img src='/icons/twitter.svg' className=' cursor-pointer' onClick={handleTwitterSignin} alt='as' />
                        </div>
                      </div>

                      <hr />

                      <div className='flex flex-col gap-4 my-10'>
                        <span className='text-[20px] text-black font-medium text-center'>
                          Don&apos;t have an account?
                        </span>

                        <button
                          onClick={switchModal}
                          className='hover:bg-primary border hover:border-primary border-gray-400 text-[18px] bg-white px-6 py-3  rounded-full'
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
