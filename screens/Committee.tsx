import React from "react";
import Heading from "@/components/common/Heading";
import Help from "@/components/common/Help";
import CommitteeCard from "@/components/CommitteeCard";
const committeeData = [
  {
    heading: "JIC-SM",
    img: "JIC-SM.webp",
    description: "Global Intelligence Agencies Unite Covertly",
    link: "/",
  },
  {
    heading: "CHAOS",
    img: "CHAOS.webp",
    description: "Global Crisis Sparks Desperate Efforts",
    link: "/",
  },
  {
    heading: "ECOSOC",
    img: "ECOSOC.webp",
    description: "Global Economic Nexus Forum",
    link: "/",
  },
  {
    heading: "UNGA SOCHUM",
    img: "SOCHUM.webp",
    description: "Rights Focused Global Dialogue Forum ",
    link: "/",
  },

  {
    heading: "UNSC",
    img: "UNSC.webp",
    description: "Global Peace and Security Authority",
    link: "/",
  },
  {
    heading: "UNGA DISEC",
    img: "DISEC.webp",
    description: "Global Military Peace Forum Delibarations",
    link: "/",
  },
  {
    heading: "LOK SABHA",
    img: "LOK-SABHA.webp",
    description: "India’s Democratic Legislative Representation",
    link: "/",
  },
];
const Committee = () => {
  return (
    <div className="w-full h-full min-h-fit">
      <div className="--container w-[90%] h-full mx-auto mt-6">
        <Heading
          heading={"Committees"}
          subHeading="Fill out the form below if you are interested in participating at VITMUN'24."
        />
        <div className=" w-[90%] mx-auto  my-20 flex justify-start gap-[3%] flex-wrap">
          {committeeData.map((committee, i) => (
            <CommitteeCard
              heading={committee.heading}
              link={committee.link}
              img={committee.img}
              description={committee.description}
              key={i}
              id={i}
            />
          ))}
        </div>
        <Help />
      </div>
    </div>
  );
};

export default Committee;
