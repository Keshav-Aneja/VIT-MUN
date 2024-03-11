import React from "react";
interface Props {
  heading: string;
}
const SectionSubHeading = ({ heading }: Props) => {
  return <div className="text-base md:text-lg font-cerealMed">{heading}</div>;
};

export default SectionSubHeading;
