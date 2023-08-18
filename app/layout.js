import { Navbar } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZYVO | Hourly Spaces',
  description: 'Unlock a world of hourly spaces',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
