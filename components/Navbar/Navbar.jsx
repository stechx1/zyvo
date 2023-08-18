import { Button } from "../Button";

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  return (
    <div className=' bg-white py-5 shadow-sm  '>
      <div className='container mx-auto flex justify-between'>
        <img src='/logo.svg' alt='logo' className='w-40' />

        <div className="flex gap-5">
          <Button type="secondary">About Us</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
