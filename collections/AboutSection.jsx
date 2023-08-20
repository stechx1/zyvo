import { poppins } from "@/utils/font";

/* eslint-disable @next/next/no-img-element */
export const AboutSection = () => {
  return (
      <div
        data-aos='fade-up'
        className='max-w-[736px] text-center space-y-6 pt-60 pb-32'
      >
        <h1 className={`text-7xl font-bold leading-[84px] ${poppins.className}`}>
          Meet ZYVO
        </h1>
        <p className='text-2xl'>The leading platform for hourly rentals</p>
    </div>
  );
};
