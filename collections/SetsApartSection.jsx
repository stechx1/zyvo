import { Container } from '@/components';
import { poppins } from '@/utils/font';

/* eslint-disable @next/next/no-img-element */
export const SetsApartSection = () => {
  const setsApart = [
    {
      id: 1,
      heading: 'Yours Hours, Your Way',
      para: 'Enjoy the liberty to rent or book spaces by the hour, no strict check-in times.',
    },
    {
      id: 2,
      heading: 'Money-Savvy Stays',
      para: 'Pay only for the hours you book, saving you time and Money.',
    },
    {
      id: 3,
      heading: 'Personalized Hospitality',
      para: 'Guests and hosts revel in customized stays, free from full-day reservations.',
    },
    {
      id: 4,
      heading: 'Embrace Quick Getaways',
      para: 'Explore wonders of the local neighborhood, even with limited time.',
    },
    {
      id: 5,
      heading: 'A Universe of Choices',
      para: 'Discover a plentiful selection of spaces, meeting every desire and need.',
    },
    {
      id: 6,
      heading: 'No Long-Term Obligation',
      para: 'Stress-free solutions for temporary space without any long-term ties. ',
    },
  ];
  return (
    <Container>
      <div
        data-aos='fade-up'
        className='container mx-auto flex flex-col justify-center items-center gap-8'
      >
        <h2
          className={`md:text-5xl text-[22px] max-w-[815px] font-[500] leading-[62px] text-center ${poppins.className}`}
        >
          What Sets Us Apart?
        </h2>
        <div className="bg-[url('/pic4.png')] bg-cover bg-center bg-no-repeat px-7 flex justify-end items-end min-h-[650px] rounded-3xl renting-spaces-item w-full">
          <div className='md:grid md:grid-cols-3 mt-20'>
            {setsApart.map((item) => (
              <div
                className='flex gap-4 justify-center items-center z-30 py-8 border-t border-t-[#ffffff33] mr-5'
                key={item.id}
              >
                <img
                  className='w-[65px] rounded-full'
                  src='/icons/check.png'
                  alt='check'
                />
                <div className='flex flex-col gap-1'>
                  <h5
                    className={`md:text-xl text-lg text-white font-[500] ${poppins.className}`}
                  >
                    {item.heading}
                  </h5>
                  <p className='text-[#ffffff99] font-[400]'>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
