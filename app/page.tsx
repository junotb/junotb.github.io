"use client";

import Image from "next/image";

const Home = () => {
  const name = 'Juno';
  const motto = 'Slow but steady';
  
  return (
    <div className="px-8 py-16 w-full h-full flex justify-center">
      <section className="mb-4 w-full min-w-[8rem] max-w-[48rem]">
        <div className="flex sm:flex-col border-b-2 border-gray-500 pb-8 gap-4">
          <Image
            src="/images/profile.png"
            alt={""}
            width={0}
            height={0}
            className="w-36 h-36 sm:w-48 sm:h-48 rounded-full"
          />
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-4xl">{name}</h3>
            <h4>{motto}</h4>
          </div>
        </div>
      </section>
      <section>
        <article>

        </article>
      </section>
    </div>
  )
};

export default Home;
