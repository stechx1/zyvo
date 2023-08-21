import RootLayout from './RootLayout';

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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
