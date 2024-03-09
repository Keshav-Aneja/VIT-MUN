import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const IndividualRegPopUp = ({ setOpen }: Props) => {
  return (
    <div className="w-[80%] md:w-[30vw] p-8 pt-12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl bg-white flex flex-col gap-4 z-[250]">
      <Image
        src="/menu-close.webp"
        width={100}
        height={100}
        className="w-3 md:w-4 absolute top-4 right-4 cursor-pointer"
        alt="close"
        onClick={() => setOpen(false)}
      />
      <Link href="/registration/internal" className="w-full">
        <button
          type="button"
          className="px-6 py-4 w-full rounded-lg border-[2px] border-[#aeaeae] bg-gradient-to-r from-slate-50 to-slate-200 text-xs md:text-lg font-cerealMed text-[rgba(0,0,0,0.7)]"
        >
          VIT VELLORE STUDENTS
        </button>
      </Link>
      <Link href="/registration/external" className="w-full">
        <button
          type="button"
          className="w-full px-6 py-4 rounded-lg border-[2px] border-[#aeaeae] bg-gradient-to-r from-slate-50 to-slate-200 text-xs md:text-lg font-cerealMed text-[rgba(0,0,0,0.7)]"
        >
          EXTERNAL PARTICIPANTS
        </button>
      </Link>
    </div>
  );
};

export default IndividualRegPopUp;
