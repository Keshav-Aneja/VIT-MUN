import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
interface Props {
  heading: string;
  img: string;
  description: string;
  link: string;
  id: number;
  setShowIndex: React.Dispatch<React.SetStateAction<number>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const CommitteeCard = ({
  heading,
  img,
  description,
  link,
  id,
  setShowIndex,
  setShow,
}: Props) => {
  return (
    <motion.div
      className="rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.2)] bg-white w-full md:w-[30%] p-4 mb-12 flex flex-col gap-2 items-center justify-between aspect-[1.125] hover:scale-105 transition-all duration-200 ease-linear"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * id }}
      viewport={{ once: true }}
    >
      <h1 className="heading text-xl font-cerealMed">{heading}</h1>
      <Image
        src={`/committee/${img}`}
        alt={heading}
        width={300}
        height={300}
        className="w-32 h-auto"
      />
      <h2 className="font-cereal text-center  w-[80%] md:w-[60%] mb-2">
        {description}
      </h2>
      <div
        className="text-sm text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer"
        onClick={() => {
          setShowIndex(id);
          setShow(true);
        }}
      >
        Read More
      </div>
    </motion.div>
  );
};

export default CommitteeCard;
