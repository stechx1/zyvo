'use client';
// import React from 'react';
// import styles from './Modal.module.css';

// export const Login = () => {
//   return (
//     <>
//       <div className={styles.ModalContainer}>
//         <div className={`${styles.modalBody}`}>
//           <span className="text-black text-[30px] font-medium text-center">Sign up or Log in</span>
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             id="email"
//             className="border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             id="password"
//             className="border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6"
//           />
//           <button className="bg-primary border border-primary text-[18px] hover:bg-white px-6 py-3  rounded-full">
//             Login
//           </button>
// <div className="flex justify-between my-5">
//   <span>Keep me logged</span>

//   <span className=" underline">Forget Password?</span>
// </div>
//           <hr />

//           <div className="flex flex-col items-center gap-4 my-10">
//             <span>OR LOGIN WITH</span>
//             <div className="flex gap-5">
//               <img src="/icons/google.svg" alt="as" />
//               <img src="/icons/facebook.svg" alt="as" />
//               <img src="/icons/twitter.svg" alt="as" />
//             </div>
//           </div>
//           <hr />
//           <div className="flex flex-col gap-4 mt-10">
//             <span className="text-[20px] text-black font-medium text-center">
//               Already have an account?
//             </span>
//           </div>

//           <button className="hover:bg-primary border hover:border-primary border-gray-400 text-[18px] bg-white px-6 py-3  rounded-full">
//             Create Account
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export function Login({ switchModal }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 flex flex-col gap-4 w-full sm:ml-4 sm:mt-0 sm:text-left">
                      <span className="text-black text-[30px] font-medium text-center">
                        Sign up or Log in
                      </span>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        className="border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="border border-solid border-gray-400 text-[18px] !important shadow-none outline-none rounded-[100px] h-[55px] px-6"
                      />
                      <button className="bg-primary border text-[18px] border-primary hover:bg-white px-6 py-3  rounded-full">
                        Login
                      </button>
                      <div className="flex text-[18px] justify-between my-5">
                        <span>Keep me logged</span>

                        <span className=" cursor-pointer underline">Forget Password?</span>
                      </div>
                      <hr />

                      <div className="flex flex-col items-center gap-4 my-10">
                        <span>OR LOGIN WITH</span>
                        <div className="flex gap-5">
                          <img src="/icons/google.svg" alt="as" />
                          <img src="/icons/facebook.svg" alt="as" />
                          <img src="/icons/twitter.svg" alt="as" />
                        </div>
                      </div>

                      <hr />

                      <div className="flex flex-col gap-4 my-10">
                        <span className="text-[20px] text-black font-medium text-center">
                          Don't have an account?
                        </span>

                        <button
                          onClick={switchModal}
                          className="hover:bg-primary border hover:border-primary border-gray-400 text-[18px] bg-white px-6 py-3  rounded-full"
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
