import React from "react";
interface Props {
  setForm?: any;
  id: number;
}
const DelegatePreferenceBox = ({ setForm, id }: Props) => {
  return (
    <div className="w-full rounded-xl border-2 border-black p-12 font-cereal my-6">
      <select
        name="Commitee_Preference_1"
        className="w-full px-6 py-2 outline-none border-2 border-[#00000050] rounded-lg mb-6 text-xl"
      >
        <option value="" selected disabled>
          Committee Preference {id}
        </option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <div className="flex justify-between">
        <input
          type="text"
          name="Allotment Preference 1"
          placeholder="Allotment Preference 1"
          className="rounded-lg text-xl border-2 border-[#00000050] w-[30%] px-4 py-2 outline-none"
        />
        <input
          type="text"
          name="Allotment Preference 2"
          placeholder="Allotment Preference 2"
          className="rounded-lg text-xl border-2 border-[#00000050] w-[30%] px-4 py-2 outline-none"
        />
        <input
          type="text"
          name="Allotment Preference 3"
          placeholder="Allotment Preference 3"
          className="rounded-lg text-xl border-2 border-[#00000050] w-[30%] px-4 py-2 outline-none"
        />
      </div>
      <p className="text-sm font-cerealMed text-center mt-6">
        *Refer to the Country Matrix given above
      </p>
    </div>
  );
};

export default DelegatePreferenceBox;
