/* eslint-disable @next/next/no-img-element */
'use client';
import { Modal } from 'antd';
import { Button } from '@/components';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { auth } from '@/firebase';
import './index.css';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
  getAuth,
} from 'firebase/auth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUser, setUser } from '@/store/context';

export const LoginModal = ({ switchModal, closeModal, loginModal }) => {
  const { dispatch } = useUser();

  const [cred, setCred] = useState({ email: '', password: '' });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [localUser, setLocalUser] = useLocalStorage('localUser', '');
  const auth = getAuth();

  const onchange = (e) => {
    setCred({ ...cred, [e.currentTarget.name]: e.currentTarget.value });
  };

  const forgotPasswordHandler = async (e) => {
    setLoading(true);
    await sendPasswordResetEmail(auth, cred.email)
      .then(() => {
        toast.success("Email sent! Check your inbox")
        setLoading(false);
        closeModal();
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
        console.log(errorCode);
      });
  };

  const handleLogin = async (e) => {
    setLoading(true);
    if (cred.email !== '' || cred.password !== '') {
      e.preventDefault();
      const Newuser = await signInWithEmailAndPassword(
        auth,
        cred.email,
        cred.password
      )
        .then((result) => {
          toast.success('Successfully signed in');
          setLocalUser(result.user);
          dispatch(setUser(result.user));
          setCred({ email: '', password: '' });
          setLoading(false);
          closeModal();
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            toast.error('Please Enter Valid Information');
          } else if (error.code === 'auth/invalid-email') {
            toast.error('That email address is invalid!');
          } else if (error.code === 'auth/wrong-password') {
            toast.error('Please Enter Valid Credentials');

            //   setIsLoading(false);
          } else {
            //   setIsLoading(false);
          }
        });
    } else {
      toast.error('Fill all the fields!');
    }
    setLoading(false);
  };

  const handleGoogleSignup = async (e) => {
    e.preventDefault();
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoading(false);
        closeModal();
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
        setLoading(false);
        closeModal();
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
        setLoading(false);
        closeModal();
        router.push('/welcome');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal open={loginModal} onCancel={closeModal} footer={null}>
      <div className='mt-3 flex flex-col gap-4 w-full sm:mt-0 sm:text-left'>
        <span className='text-black text-[30px] font-medium text-center'>
          {forgotPassword ? 'Forgot Password' : 'Sign up or Log in'}
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
        {forgotPassword && (
          <>
            <p className='text-center'>
              Enter your email, and a password reset link would be sent to your
              email
            </p>
            <Button disabled={loading} onClick={forgotPasswordHandler}>Send Link</Button>
          </>
        )}
        {!forgotPassword && (
          <>
            <input
              onChange={onchange}
              type='password'
              value={cred.password}
              placeholder='Password'
              name='password'
              id='password'
              className='border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6'
            />
            <Button disabled={loading} onClick={handleLogin}>
              Login
            </Button>
          </>
        )}

        <div className='flex text-[18px] justify-between my-5'>
          <div className='flex gap-2 items-center'>
            <input
              type='checkbox'
              className='bg-[#e1e1e5] m-0 border-[3px] border-white rounded-full outline-1 outline-[#c4c4c4] outline checked:outline-primary checked:bg-primary focus:outline-primary focus:bg-primary'
            />
            <span>Keep me logged</span>
          </div>

          <span
            onClick={() => {
              setForgotPassword(!forgotPassword);
            }}
            className=' cursor-pointer underline'
          >
            {!forgotPassword ? 'Forgot Password' : 'Go Back'}
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
    </Modal>
  );
};
