import RootLayout from './RootLayout';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: {
    default: 'Zyvo Website',
    template: 'Unlock World of Hourly Spaces',
  },
};



export default function Layout({ children }) {
  return (
    <html lang='en'>
        <body>
        <ClerkProvider>
          <RootLayout>{children}</RootLayout>
    </ClerkProvider>
        </body>
      </html>
  );
}
