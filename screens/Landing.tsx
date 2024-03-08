import React from "react";
import Image from "next/image";
import MarqueeBar from "@/components/MarqueeBar";
const Landing = () => {
  return (
    <div className="w-full h-full">
      <Image
        src="/hero-bg.png"
        alt="VIT_MUN"
        width={1000}
        height={1000}
        className="h-[75%] w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="w-full h-[63%] relative flex flex-col gap-8 justify-center items-center">
        <Image
          src="/vit-mun-logo.png"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="h-[75%] w-auto "
        />
        <div className="btn-menu w-fit  flex gap-2  font-cereal text-xs scale-75 md:scale-100 ">
          <button className="px-6 py-2 rounded-l-full outline-none border-0 shadow-[0px_0px_15px_rgba(0,0,0,0.2)] cursor-pointer tracking-wider">
            DELEGATION REGISTRATION
          </button>
          <button className="px-6 py-2 rounded-r-full outline-none border-0 font-cerealMed  shadow-[0px_0px_15px_rgba(0,0,0,0.2)] cursor-pointer">
            INDIVIDUAL REGISTRATION
          </button>
        </div>
      </div>
      <div className="w-full h-[30%] relative">
        <Image
          src="/hero-abstract.svg"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="w-full absolute bottom-0 left-0"
        />
        <Image
          src="/right-abstract.png"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="w-16 md:w-52 absolute bottom-0 right-0"
        />
        <Image
          src="/left-abstract.png"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="w-16 md:w-52 absolute bottom-0 left-0"
        />
      </div>
      <MarqueeBar />
    </div>
  );
};

export default Landing;
