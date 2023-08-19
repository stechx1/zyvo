export const AboutBox = ({ heading, para }) => {
  return (
    <div className="flex flex-col p-4 border border-gray-500 rounded-lg gap-2">
      <span className="text-3xl font-bold">{heading}</span>
      <span>{para}</span>
    </div>
  );
};
