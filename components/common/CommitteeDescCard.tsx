import React from "react";
interface Positions {
  position: string;
  name: string;
}
interface Props {
  heading: string;
  positions: Positions[];
  description: string;
  agenda: string[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CommitteeDescCard = ({
  heading,
  positions,
  description,
  agenda,
  setOpen,
}: Props) => {
  return (
    <div className="p-8 w-[90%] md:w-[40%] rounded-2xl  bg-[#ffffff] shadow-xl  flex flex-col gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[250]">
      <div
        className="close text-xl md:text-2xl absolute top-3 right-3 cursor-pointer font-cerealMed"
        onClick={() => setOpen(false)}
      >
        X
      </div>
      <h1 className="text-xl md:text-2xl font-cerealMed font-medium">
        {heading}
      </h1>
      <div className="">
        {positions.map((pos, i) => (
          <>
            <p className="text-base md:text-lg font-cereal">
              <span className=" font-cerealMed">{pos.position} : </span>
              <span>{pos.name}</span>
            </p>
          </>
        ))}
      </div>
      <p className="text-xs md:text-sm font-cereal">"{description}"</p>
      <div className="text-xs md:text-sm font-cereal">
        <h1 className="text-lg md:text-xl font-cerealMed">Agenda</h1>
        <div className="flex flex-col gap-2">
          {agenda.map((agendas, i) => (
            <p>{agendas}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteeDescCard;
