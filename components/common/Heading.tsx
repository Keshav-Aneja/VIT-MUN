import React from "react";
interface Props {
  heading: string;
  subHeading: string;
}
const Heading = ({ heading, subHeading }: Props) => {
  return (
    <div>
      <h1 className="--main-heading font-cerealMed text-3xl">{heading}</h1>
      <h2 className="--sub-heading font-cereal ">{subHeading}</h2>
    </div>
  );
};

export default Heading;
