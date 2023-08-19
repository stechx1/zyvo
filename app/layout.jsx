import { Footer, Navbar } from '@/components';
import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import { AOSInit } from '@/AOSInit';

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

export const metadata = {
  title: 'ZYVO | Hourly Spaces',
  description: 'Unlock a world of hourly spaces',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AOSInit />
      <body className={`${roboto.className} ${poppins.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
