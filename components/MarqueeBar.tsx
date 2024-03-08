import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const MarqueeBar = () => {
  return (
    <div className="w-full h-[7%]  border-b-2 border-black flex items-center relative z-[100] bg-white">
      <Marquee>
        <div className="w-full flex gap-12 font-cerealBold text-sm md:text-base">
          <p className="ml-12">WHERE YOUR VOICE MATTERS</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          <p>ONE OF THE BIGGEST MUN IN SOUTH INDIA</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          <p>ROAD TO VITMUN</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          <p>WHERE YOUR VOICE MATTERS</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          <p>ONE OF THE BIGGEST MUN IN SOUTH INDIA</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
          <p>ROAD TO VITMUN</p>
          <Image src="/star.svg" alt="star" width={20} height={20} />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
