import React from "react";
interface Props {
  id: number;
  setForm?: any;
}
const DelegateExperienceBox = ({ id, setForm }: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <input
        type="text"
        className="w-full rounded-xl border-2 border-black p-4 font-cereal"
        placeholder="Number of MUNs as a Delegate"
      />
      <textarea
        name={`Experience ${id}`}
        className="w-full min-h-40 rounded-xl border-2 border-black p-4 font-cereal"
        placeholder="Format : 
        Conference Name/Year - Committee - Country - Award
          (Leave Blank if None)"
      ></textarea>
    </div>
  );
};

export default DelegateExperienceBox;
