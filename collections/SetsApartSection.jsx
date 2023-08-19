import { poppins } from "@/utils/font";

/* eslint-disable @next/next/no-img-element */
export const SetsApartSection = () => {
  const setsApart = [
    {
    id: 1,
    heading: "Yours Hours, Your Way",
    para: "Enjoy the liberty to rent or book spaces by the hour, no strict check-in times."
  },
    {
    id: 2,
    heading: "Money-Savvy Stays",
    para: "Pay only for the hours you book, saving you time and Money."
  },
    {
    id: 2,
    heading: "Personalized Hospitality",
    para: "Guests and hosts revel in customized stays, free from full-day reservations."
  },
    {
    id: 2,
    heading: "Embrace Quick Getaways",
    para: "Explore wonders of the local neighborhood, even with limited time."
  },
    {
    id: 2,
    heading: "A Universe of Choices",
    para: "Discover a plentiful selection of spaces, meeting every desire and need."
  },
    {
    id: 2,
    heading: "No Long-Term Obligation",
    para: "Stress-free solutions for temporary space without any long-term ties. "
  },
]
  return (
    <div data-aos="fade-up" className='container mx-auto flex flex-col justify-center items-center gap-8'>
      <h2 className={`text-5xl max-w-[815px] font-[500] leading-[62px] text-center ${poppins.className}`}>
        What Sets Us Apart?
      </h2>
      <div className="bg-[url('/pic4.png')] bg-cover bg-center bg-no-repeat px-7 flex justify-end items-end min-h-[650px] rounded-3xl renting-spaces-item w-full">
        <div className="grid grid-cols-3">
          {setsApart.map(item => (
            <div className="flex gap-4 justify-center items-center z-10 py-8 border-t border-t-[#ffffff33] mr-5" key={item.id}>
              <img className="w-[75px] rounded-full" src="/icons/check.png" alt="check" />
              <div className="flex flex-col gap-1">
                <h5 className={`text-xl text-white font-[500] ${poppins.className}`}>{item.heading}</h5>
                <p className="text-[#ffffff99] font-[400]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
