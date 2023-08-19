import { poppins } from '@/utils/font';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='bg-[#3b4b4c] pt-20 text-white rounded-2xl'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-5'>
          <div className='flex flex-col'>
            <h2 className={`text-2xl ${poppins.className}`}>Join Newsletter</h2>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className={`text-2xl ${poppins.className}`}>Company</h2>
            <div className='text-[#ffffff99] space-y-8 flex flex-col'>
              <Link href="/">Our Story</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Why Us</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className={`text-2xl ${poppins.className}`}>Account</h2>
            <div className='text-[#ffffff99] space-y-8 flex flex-col'>
              <Link href="/">Register</Link>
              <Link href="/">Login</Link>
              <Link href="/">Gift Vouchers</Link>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <h2 className={`text-2xl ${poppins.className}`}>Resources</h2>
            <div className='text-[#ffffff99] space-y-8 flex flex-col'>
              <Link href="/">Become a host</Link>
              <Link href="/">Blog Articles</Link>
              <Link href="/">Explore Now</Link>
            </div>
          </div>

          <div>
            <h2 className={`text-2xl ${poppins.className}`}>Follow Us</h2>
            <div className='flex gap-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
