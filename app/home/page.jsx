import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const Home = () => {
  const session = useSession();
  return (
    <>
      <div>{session?.data?.user?.name}</div>
      <button>Sign Out</button>
    </>
  );
};

export default Home;
