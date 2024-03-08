import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  heading: string;
  img: string;
  description: string;
  link: string;
}
const CommitteeCard = ({ heading, img, description, link }: Props) => {
  return (
    <div className="rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.2)] bg-white w-full md:w-[30%] p-4 mb-12 flex flex-col gap-2 items-center justify-between aspect-[1.125] hover:scale-105 transition-all duration-200 ease-linear">
      <h1 className="heading text-xl font-cerealMed">{heading}</h1>
      <Image
        src={`/committee/${img}`}
        alt={heading}
        width={300}
        height={300}
        className="w-32 h-auto"
      />
      <h2 className="font-cereal text-center">{description}</h2>
      <Link
        href={link}
        className="text-sm text-blue-500 hover:underline hover:underline-offset-2 "
      >
        Read More
      </Link>
    </div>
  );
};

export default CommitteeCard;
