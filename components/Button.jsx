export const Button = ({ children, type, onClick, disabled = false }) => {
  if (type === 'secondary') {
    return (
      <button onClick={onClick} className='hover:underline'>
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='bg-primary border border-primary hover:bg-white px-6 py-3 rounded-full disabled:pointer-events-none disabled:opacity-50'
    >
      {children}
    </button>
  );
};
