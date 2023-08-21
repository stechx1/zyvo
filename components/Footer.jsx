/* eslint-disable @next/next/no-img-element */
'use client';
import { poppins } from '@/utils/font';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '.';

export const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <Container>
      <div className='bg-[#3b4b4c] md:pt-20 p-8 my-2 text-white rounded-2xl'>
        <div className='container mx-auto flex flex-col justify-center '>
          <div className='flex justify-between  md:space-y-0 space-y-6'>
            {/* <div className='flex flex-col md:col-span-1 col-span-2 md:my-0 my-4'>
              <h2 className={`text-2xl ${poppins.className}`}>
                Join Newsletter
              </h2>
              <div className=''>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  placeholder='Email'
                  name='email'
                  id='email'
                  className='bg-transparent text-white border border-solid border-gray-400 shadow-none outline-none focus:text-white focus:border-white rounded-[100px] h-12 px-6 my-6'
                >
                </input>
                  <img
                    src='/icons/message.svg'
                    alt='message'
                    className='w-10'
                  />
              </div>
            </div> */}

            {/* <div className='flex flex-col md:gap-8 gap-3'>
              <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                Company
              </h2>
              <div className='text-[#ffffff99] space-y-3 md:space-y-8 flex flex-col'>
                <Link href='/'>Our Story</Link>
                <Link href='/'>FAQ</Link>
                <Link href='/'>Why Us</Link>
                <Link href='/'>Contact Us</Link>
              </div>
            </div> */}

            <div className='flex flex-col md:gap-8 gap-3'>
              <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                Account
              </h2>
              <div className='text-[#ffffff99] space-y-3 md:space-y-8 flex flex-col'>
                <Link href='/'>Register</Link>
                <Link href='/'>Login</Link>
                {/* <Link href='/'>Gift Vouchers</Link> */}
              </div>
            </div>

            {/* <div className='flex flex-col md:gap-8 gap-3'>
              <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                Resources
              </h2>
              <div className='text-[#ffffff99] space-y-3 md:space-y-8 flex flex-col'>
                <Link href='/'>Become a host</Link>
                <Link href='/'>Blog Articles</Link>
                <Link href='/'>Explore Now</Link>
              </div>
            </div> */}

            <div className='flex flex-col md:gap-8 gap-3'>
              <h2 className={`md:text-2xl text-lg ${poppins.className}`}>
                Follow Us
              </h2>
              <div className='flex gap-2'>
                <img
                  src='/icons/facebook-icon.svg'
                  className='md:w-10 w-8 cursor-pointer'
                  alt='fb'
                />
                <img
                  src='/icons/instagram-icon.svg'
                  className='md:w-10 w-8 cursor-pointer'
                  alt='instagram'
                />
                <img
                  src='/icons/twitter-icon.svg'
                  className='md:w-10 w-8 cursor-pointer'
                  alt='twitter'
                />
                <img
                  src='/icons/linkedin-icon.svg'
                  className='md:w-10 w-8 cursor-pointer'
                  alt='linkedin'
                />
              </div>
            </div>
          </div>

          <div className='my-12 flex justify-center items-center'>
            <div className='flex gap-4 '>
              <img className='w-10  md:w-full md:h-full' src='/icons/amex.png' alt='amex' />
              <img className='w-10  md:w-full md:h-full' src='/icons/apple-pay.png' alt='apple' />
              <img className='w-10  md:w-full md:h-full' src='/icons/mastercard.png' alt='mc' />
              <img className='w-10  md:w-full md:h-full' src='/icons/visa.png' alt='visa' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center py-2 md:space-y-0 space-y-6'>
            <p className='text-[#ffffff99]'>Zyvo © Copyright 2023</p>
            <img src='icons/white-logo.svg' alt='logo' />
            <div className='flex gap-2 text-[#ffffff99]'>
              <Link href='/'>Privacy Policy</Link>
              <p>|</p>
              <Link href='/'>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
