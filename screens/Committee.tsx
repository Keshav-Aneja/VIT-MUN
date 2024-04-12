import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import Help from "@/components/common/Help";
import CommitteeCard from "@/components/CommitteeCard";
import CommitteeDescCard from "@/components/common/CommitteeDescCard";
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
  const [showIndex, setShowIndex] = useState(-1);
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-full min-h-fit">
      <div className="--container w-[90%] h-full mx-auto mt-6">
        <Heading
          heading={"Committees"}
          subHeading="Presenting the Committees for VITMUN'24!"
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
              setShowIndex={setShowIndex}
              setShow={setShow}
            />
          ))}
        </div>
        {show && (
          <>
            <CommitteeDescCard
              setOpen={setShow}
              heading={committeeCardData[showIndex].heading}
              description={committeeCardData[showIndex].description}
              agenda={committeeCardData[showIndex].agenda}
              positions={committeeCardData[showIndex].positions}
            />
            <div
              className="bg-[rgba(0,0,0,0.2)] backdrop-blur-sm w-full h-full fixed top-0 left-0 z-[200]"
              onClick={() => setShow(false)}
            ></div>
          </>
        )}
        <Help />
      </div>
    </div>
  );
};

export default Committee;

const committeeCardData = [
  {
    heading: "Joint Intelligence Command Special Meeting",
    positions: [
      { position: "Chairperson", name: "Gowtham Srinivas" },
      { position: "Vice-Chairperson", name: "Swastik Shukla" },
      { position: "Director", name: "Vansh S Kalantri" },
    ],
    description:
      "Experience a dynamic MUN simulation of the Joint Intelligence Command. Special meeting unites intelligence committees for strategic discussions, fostering collaboration and informed decision-making in global security matters.",
    agenda: ["Special Meeting on the 20th of May 2010 - Codename Mendax"],
  },
  {
    heading: "Council to Halt the Annihilation of States",
    positions: [
      {
        position: "Co-Chairpersons",
        name: "Ayush R and Fazil Razak",
      },
      { position: "Director", name: "Arsh Misra" },
    ],
    description:
      "Participate in an impactful MUN simulation of the Council to Halt the Annihilation of States. Collaborate on strategies to prevent state destruction and foster global stability.",
    agenda: ["CHAOS : 1948"],
  },
  {
    heading: "Economic and Social Council",
    positions: [
      {
        position: "Co-Chairpersons",
        name: "Abhishek Sudke and Arkoprabho Hazra",
      },
      { position: "Directors", name: "Sneha Banerjee" },
    ],
    description:
      "Participate in an impactful MUN simulation of the Economic and Social Council. Collaborate on global development strategies, address socio-economic challenges, and advocate for sustainable solutions to shape a better future.",
    agenda: ["Moving towards the pact of the Future"],
  },
  {
    heading: "Social, Humanitarian and Cultural Committee",
    positions: [
      {
        position: "Co-Chairpersons",
        name: "Shankar K and Tejashh Baghiri",
      },
      { position: "Directors", name: "Neha Sachan" },
    ],
    description:
      "Step into the shoes of delegates in a Model United Nations simulation of the UNGA Third Committee (Social, Humanitarian, and Cultural). Advocate for global social justice and human rights.",
    agenda: [
      "A) Comprehensive implementation of and follow-up to the Vienna Declaration and Programme of Action.",
      "B) Comprehensive implementation of and follow-up to the Durban Declaration and Programme of Action.",
    ],
  },

  {
    heading: "United Nations Security Council",
    positions: [
      {
        position: "President",
        name: "Shayer Majumdar",
      },
      { position: "Vide-President", name: "Aditya Chandrashekar" },
      {
        position: "Director",
        name: "Abhay Sastha",
      },
    ],
    description:
      "Participate in an exciting MUN simulation of the United Nations Security Council. Tackle pressing international crises, negotiate resolutions, and uphold peace and security on a global scale.",
    agenda: ["The Situation in Yemen"],
  },
  {
    heading: "Disarmament and International Security Council",
    positions: [
      {
        position: "Co-Chairpersons",
        name: "Niresh Swamy and Sashank Srinivas",
      },
      { position: "Directors", name: " Priyansh Desai and Sushane Makkar" },
    ],
    description:
      "Engage in an immersive MUN simulation of the United Nations General Assembly's Disarmament and International Security Committee. Debate global disarmament and security issues, shaping policies for a safer world.",
    agenda: ["Uniting for Consensus"],
  },

  {
    heading: "Lok Sabha",
    positions: [
      {
        position: "Speaker",
        name: "Shreyas Ashok Kumar",
      },
      { position: "Deputy Speaker", name: "Sagar Munshi" },
      {
        position: "Scribe",
        name: "Mukesh Sharma",
      },
    ],
    description:
      "Experience the vibrant democracy of India through an MUN simulation of Lok Sabha. Debate legislation, address national issues, and engage in parliamentary procedures to shape the nation's future.",
    agenda: [
      "A) Finance Commission Reforms",
      "B) Review of the Armed Forces (Special Powers) Act, 1958",
    ],
  },
];
