import React from "react";
interface Props {
  label: string;
}
const Labels = ({ label }: Props) => {
  return (
    <div className="w-fit bg-[#008180] px-3 py-2 md:py-1 text-white font-cerealMed text-[0.6rem] md:text-xs rounded-lg flex items-center text-nowrap">
      {label}
    </div>
  );
};

export default Labels;
