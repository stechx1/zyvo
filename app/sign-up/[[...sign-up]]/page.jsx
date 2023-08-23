/* eslint-disable @next/next/no-img-element */
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='bg-[url("/banner-bg.png")] bg-cover bg-center h-screen flex flex-col justify-center items-center'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-primary rounded-full text-black hover:bg-[#39C995] py-5',
            footerActionLink: 'text-primary underline',
            formFieldInput:
              'border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6 focus:border-primary active:border-primary focus:outline-none active:outline-none',
          },
        }}
      />
    </div>
  );
}
