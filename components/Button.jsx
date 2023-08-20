export const Button = ({ children, type, onClick }) => {
  if (type === 'secondary') {
    return <button onClick={onClick} className='hover:underline'>{children}</button>;
  }
  return (
    <button onClick={onClick} className='bg-primary border border-primary hover:bg-white px-6 py-3 rounded-full'>
      {children}
    </button>
  );
};
