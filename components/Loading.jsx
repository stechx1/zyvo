import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/preloader/data.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

export default Loading;
