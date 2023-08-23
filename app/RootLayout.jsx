'use client';
import { Footer, NewNavbar } from '@/components';
import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import { AOSInit } from '@/AOSInit';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import { ToasterProvider } from '@/providers/toast-provider';
import { UserProvider } from '@/store/context';
import { ClerkProvider } from '@clerk/nextjs';

import StyledComponentsRegistry from '@/lib/AntRegistry';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

// export const metadata = {
//   title: 'ZYVO | Hourly Spaces',
//   description: 'Unlock a world of hourly spaces',
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AOSInit />
      {/* <body className={`${roboto.className} ${poppins.className} `}> */}
        {loading ? (
          <Loading />
        ) : (
          <>
            <StyledComponentsRegistry>
              <UserProvider>
                <ToasterProvider />
                <NewNavbar />
                {children}
                <Footer />
              </UserProvider>
            </StyledComponentsRegistry>
          </>
        )}
      {/* </body> */}
    </>
  );
}
