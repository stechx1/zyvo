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
    <ClerkProvider>
      <html lang='en'>
        <body>
          <RootLayout>{children}</RootLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
