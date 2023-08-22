'use client';
import { useState } from 'react';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase';
import { Avatar, Popover } from 'antd';
import { Container } from '.';
import { LoginModal } from './Modal/AntdModal/Login';
import { RegisterModal } from './Modal/AntdModal/Register';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useUser, setUser, logout } from '@/store/context';


/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  console.log(auth.currentUser);
  const [loginModal, setLoginModal] = useState(false);
  const [SignupModal, setSignupModal] = useState(false);
  const { user, isLoggedIn, dispatch } = useUser();

  // const [localUser, setLocalUser] = useLocalStorage('localUser', '');
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        logout();
        // setLocalUser(null)
        dispatch(logout());
        router.push('/');
      })
      .catch((err) => {
        console.log('Some error in signout');
      });
  };
  const router = useRouter();
  const content = (
    <div className='flex flex-col gap-2'>
      <p>{auth?.currentUser?.displayName || 'New User'}</p>
      <div onClick={handleSignout} className='flex gap-2 cursor-pointer'>
        <img src='/icons/logout.svg' alt='logout' />
        <p>Logout</p>
      </div>
    </div>
  );
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
      <Container>
        <div className='container mx-auto flex justify-between'>
          <img
            src='/logo.svg'
            alt='logo'
            className='md:w-40 w-28 cursor-pointer'
            onClick={() => router.push('/')}
          />

          <div className='flex gap-5 justify-center items-center'>
            <Button onClick={() => router.push('/about')} type='secondary'>
              About Us
            </Button>
            {auth.currentUser ? (
              <>
                <Popover content={content} arrow={false} trigger={'click'}>
                  <Avatar
                    className='cursor-pointer'
                    size={'large'}
                    src={auth?.currentUser?.photoURL}
                    style={{ verticalAlign: 'middle' }}
                  >
                    {auth?.currentUser?.displayName?.slice(0, 1) || 'N'}
                  </Avatar>
                </Popover>
              </>
            ) : (
              <Button
                onClick={() => {
                  setSignupModal(true);
                }}
              >
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* <Signup
        visible={SignupModal}
        switchModal={switchModal}
        closeModal={closeModal}
      /> */}

      <RegisterModal
        switchModal={switchModal}
        closeModal={closeModal}
        signupModal={SignupModal}
      />

      {loginModal && (
        <LoginModal
          switchModal={switchModal}
          closeModal={closeModal}
          loginModal={loginModal}
        />
        // <Login switchModal={switchModal} closeModal={closeModal} />
      )}
    </div>
  );
};
