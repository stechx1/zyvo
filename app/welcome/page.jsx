'use client';
import React, { useState } from 'react';
import { Modal } from 'antd';
import { Button } from '@/components';
import { poppins } from '@/utils/font';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=''>
      <Modal
        title='Welcome to Zyvo universe'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={<Button onClick={handleCancel}>Done</Button>}
      >
        <p>
          Thank you for signing up with Zyvo! We&apos;re excited to have you on
          board. Our website is coming soon, and we&apos;ll keep you updated on
          our progress. Stay tuned for an amazing experience! Thank you for your
          patience.
        </p>
        <div className='mt-6'>
          <p>Best Regards,</p>
          <p>The Zyvo Team</p>
        </div>
      </Modal>

      <div className='container mx-auto flex flex-col my-16  justify-center items-center'>
        <p className='text-lg'>Its Official</p>
        <h2 className={` font-bold text-4xl my-4 ${poppins.className}`}>
          You&apos;re now part of the{' '}
          <span className='text-primary'>ZYVO Universe</span>
        </h2>
        <div className='flex flex-col gap-6 justify-center items-center text-center w-[60%]'>
          <p>We&apos;re stoked to have you on board!</p>
          <p>
            Thank you for joining our vibrant community of flexible adventurers
            and innovative hosts.
          </p>
          <p>
            Get ready to seize every moment, one hour at a time! Your journey
            with us promises endless possibilities, personalized experiences,
            and smart stays that save you both time and money.
          </p>
          <p>
            Stay tuned for hourly escapades, quick getaways, and tailored
            discoveries that perfectly match your style and needs.
          </p>
          <p>
            Explore now, unleash the fun, and make the most of your ZYVO
            journey.
          </p>
          <p className='font-bold'>It&apos;s time to ZYVO-lve!</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
