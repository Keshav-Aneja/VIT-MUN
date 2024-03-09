import React from "react";
interface Props {
  heading: string;
}
const SectionHeading = ({ heading }: Props) => {
  return <div className="text-xl md:text-2xl font-cerealMed">{heading}</div>;
};

export default SectionHeading;
