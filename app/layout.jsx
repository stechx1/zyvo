import { Navbar } from '@/components';
import './globals.css';
import { Poppins } from 'next/font/google';
import { AOSInit } from '@/AOSInit';

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'ZYVO | Hourly Spaces',
  description: 'Unlock a world of hourly spaces',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <AOSInit />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
