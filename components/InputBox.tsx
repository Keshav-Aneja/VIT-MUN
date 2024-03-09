import React from "react";
interface Props {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}
const InputBox = ({ label, placeholder, name, onChange, id }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-[42%] mb-8">
      <label htmlFor={name} className="text-base md:text-lg font-cereal">
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        className="w-full border-2 border-[#00000050] rounded-lg outline-none px-4 py-2 text-sm md:text-base"
      />
    </div>
  );
};

export default InputBox;
