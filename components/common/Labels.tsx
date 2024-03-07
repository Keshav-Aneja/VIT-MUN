import React from "react";
interface Props {
  label: string;
}
const Labels = ({ label }: Props) => {
  return (
    <div className="bg-[#008180] px-3 py-1 text-white font-cerealMed text-xs rounded-lg flex items-center">
      {label}
    </div>
  );
};

export default Labels;
