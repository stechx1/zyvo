import { Button } from "@/components";

export const DetailsSection = () => {
  return (
    <div
      data-aos='fade-up'
      className='flex flex-col justify-center items-center container mx-auto gap-8'
    >
      <h2 className='text-5xl max-w-[815px] font-[500] leading-[62px] text-center'>
        A new way of <span className='text-primary'>renting and booking</span>{' '}
        spaces hour by hour
      </h2>
      <div className='flex gap-10'>
        <div className="bg-[url('/pic1.png')] bg-cover bg-center bg-no-repeat p-9 flex justify-end items-end min-h-[450px] rounded-3xl renting-spaces-item">
          <h2 className='text-3xl text-white font-[500] z-10'>
            Are you a frequent traveler or an ambitious host seeking flexible
            earnings?
          </h2>
        </div>

        <div className="bg-[url('/pic2.png')] bg-cover bg-center bg-no-repeat p-9 flex justify-end items-end min-h-[450px] rounded-3xl renting-spaces-item">
          <h2 className='text-3xl font-[500] text-white z-10'>
            Whether you&apos;re a globe-trotting guest or a savvy host, ZYVO is
            your ultimate go-to.
          </h2>
        </div>
      </div>
      <Button>Create your ZYVO account</Button>
    </div>
  );
};
