export const Button = ({ children, type }) => {
  if (type === 'secondary') {
    return <button className='hover:underline'>{children}</button>;
  }
  return (
    <button className='bg-primary border border-primary hover:bg-white px-6 rounded-full'>
      {children}
    </button>
  );
};
