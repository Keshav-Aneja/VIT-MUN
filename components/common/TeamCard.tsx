import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  designation: string;
  subcard?: boolean;
  subcard_small?: boolean;
}
const TeamCard = ({ name, designation, subcard, subcard_small }: Props) => {
  return (
    <div
      className={`${
        subcard
          ? "w-full"
          : subcard_small
          ? "w-full"
          : "w-[48%] md:w-[18%] mb-8"
      }`}
    >
      <div className="w-full h-14 bg-black relative">
        <Image
          src="/card-bg.webp"
          alt=""
          className="absolute top-0 left-0 w-full h-full"
          width={400}
          height={400}
        />
        <div className="text-white text-sm md:text-base text-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] ">
          {name}
        </div>
      </div>
      <div className="w-full h-10 text-center bg-[#1f75bc] text-white text-[0.6rem] md:text-xs font-cerealMed p-1 flex items-center justify-center">
        {designation}
      </div>
    </div>
  );
};

export default TeamCard;
