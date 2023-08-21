'use client';
import { Button, Container } from '@/components';
import { poppins } from '@/utils/font';
import { auth } from '@/firebase';
import { useEffect, useState } from 'react';

export const DetailsSection = ({
  setSignupModal,
}) => {
  return (
    <Container>
      <div
        data-aos='fade-up'
        className='flex flex-col justify-center items-center md:container container-sm mx-auto gap-8 mt-[-70px] md:mt-0'
      >
        <h2
          className={`md:text-5xl text-[22px] max-w-[815px] font-[500] md:leading-[62px] text-center ${poppins.className}`}
        >
          A new way of <span className='text-primary'>renting and booking</span>{' '}
          spaces hour by hour
        </h2>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className="bg-[url('/pic1.png')] bg-cover bg-center bg-no-repeat p-9 flex justify-end items-end md:min-h-[450px] min-h-[220px] md:rounded-3xl rounded-3xl renting-spaces-item">
            <h2
              className={`md:text-3xl text-[20px] text-white font-[500] z-10 ${poppins.className} `}
            >
              Are you a frequent traveler or an ambitious host seeking flexible
              earnings?
            </h2>
          </div>

          <div className="bg-[url('/pic2.png')] bg-cover bg-center bg-no-repeat p-9 flex justify-end items-end md:min-h-[450px] min-h-[220px] rounded-3xl renting-spaces-item">
            <h2 className='md:text-3xl text-[20px] font-[500] text-white z-10'>
              Whether you&apos;re a globe-trotting guest or a savvy host, ZYVO
              is your ultimate go-to.
            </h2>
          </div>
        </div>
        {!auth.currentUser && (
          <Button onClick={() => setSignupModal(true)}>
            Create your ZYVO account
          </Button>
        )}
      </div>
    </Container>
  );
};
