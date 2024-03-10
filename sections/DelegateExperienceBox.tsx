import React from "react";
interface Props {
  id: number;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  boxType: string;
}
const DelegateExperienceBox = ({ id, onChange, boxType }: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <input
        type="text"
        className="text-xs md:text-base w-full rounded-xl border-2 border-black p-4 font-cereal"
        placeholder={
          id === 1
            ? "Number of MUNs as a Delegate"
            : "Number of MUNs as a Executive Board"
        }
        onChange={onChange}
        id={`MUN${boxType}Count`}
      />
      <textarea
        name={`Experience ${id}`}
        className="text-xs md:text-base w-full min-h-32 md:min-h-40 rounded-xl border-2 border-black p-4 font-cereal"
        onChange={onChange}
        id={`MUN${boxType}Experience`}
        placeholder="Format : 
        Conference Name/Year - Committee - Country - Award
          (Write N/A if None)"
      ></textarea>
    </div>
  );
};

export default DelegateExperienceBox;
