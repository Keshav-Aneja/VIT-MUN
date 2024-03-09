import React from "react";
interface Props {
  id: number;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}
const DelegatePreferenceBox = ({ onChange, id }: Props) => {
  return (
    <div className="w-full rounded-xl border-2 border-black p-4 md:p-12 font-cereal my-6">
      <select
        name="Commitee_Preference_1"
        className="w-full px-2 md:px-6 py-2 outline-none border-2 border-[#00000050] rounded-lg mb-6 text-xs md:text-xl"
        onChange={onChange}
        id={`CommitteePreference${id}`}
      >
        <option value="" selected disabled>
          Committee Preference {id}
        </option>
        <option
          value="CHAOS: Council to Halt Annihilation of States
"
        >
          CHAOS: Council to Halt Annihilation of States
        </option>
        <option
          value="JIC-SM: Joint Intelligence Command Special Meeting
"
        >
          JIC-SM: Joint Intelligence Command Special Meeting
        </option>
        <option
          value="UNSC (United Nations Security Council)
"
        >
          UNSC (United Nations Security Council)
        </option>
        <option
          value="SOCHUM (Social, Humanitarian and Cultural Committee)
"
        >
          SOCHUM (Social, Humanitarian and Cultural Committee)
        </option>
        <option
          value="ECOSOC (Economic and Social Council)
"
        >
          ECOSOC (Economic and Social Council)
        </option>
        <option
          value="Lok Sabha
"
        >
          Lok Sabha
        </option>
        <option value="Disarmament and International Security Committee (DISEC)">
          Disarmament and International Security Committee (DISEC)
        </option>
      </select>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
        <input
          type="text"
          name="Allotment Preference 1"
          placeholder="Allotment Preference 1"
          onChange={onChange}
          id={`Committee${id}AllotmentPreference1`}
          className="w-full md:w-[30%] rounded-lg text-xs md:text-xl border-2 border-[#00000050] px-4 py-2 outline-none"
        />
        <input
          type="text"
          name="Allotment Preference 2"
          placeholder="Allotment Preference 2"
          onChange={onChange}
          id={`Committee${id}AllotmentPreference2`}
          className="w-full md:w-[30%] rounded-lg md:text-xl border-2 border-[#00000050]  px-4 py-2 outline-none text-xs"
        />
        <input
          type="text"
          name="Allotment Preference 3"
          placeholder="Allotment Preference 3"
          onChange={onChange}
          id={`Committee${id}AllotmentPreference3`}
          className="w-full md:w-[30%] rounded-lg md:text-xl border-2 border-[#00000050] px-4 py-2 outline-none text-xs"
        />
      </div>
      <p className="text-xs md:text-sm font-cerealMed text-center mt-6">
        *Refer to the Country Matrix given above
      </p>
    </div>
  );
};

export default DelegatePreferenceBox;
