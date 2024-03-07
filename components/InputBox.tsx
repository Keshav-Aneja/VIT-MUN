import React from "react";
interface Props {
  label: string;
  placeholder: string;
  name: string;
  onChange?: any;
}
const InputBox = ({ label, placeholder, name, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-[47%] mb-8">
      <label htmlFor={name} className="text-lg font-cereal">
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-[80%] border-2 border-[#00000050] rounded-lg outline-none px-4 py-2"
      />
    </div>
  );
};

export default InputBox;
