import React from "react";
import Heading from "@/components/common/Heading";
import TeamCard from "@/components/common/TeamCard";
import Image from "next/image";
const teamData = [{}];
const Teams = () => {
  return (
    <>
      <main className="w-full h-full min-h-fit">
        <div className="--container w-[90%] h-full mx-auto mt-6">
          <Heading
            heading={"Organizing Team"}
            subHeading="Fill out the form below if you are a student of VIT Vellore, and want to participate in VITMUN'24"
          />
          <div className="w-full mx-auto my-20">
            <h1 className="text-2xl font-cerealMed mb-8">Faculty Body</h1>
            <div className="--faculty-cards flex flex-wrap justify-between">
              {facultyData.map((faculty, index) => (
                <TeamCard
                  name={faculty.name}
                  designation={faculty.designation}
                  key={index}
                />
              ))}
            </div>
            <h1 className="text-2xl font-cerealMed mb-8 mt-4">
              Core - Secretariat
            </h1>
            <div className="--faculty-cards w-full flex flex-wrap justify-between">
              {coreData.map((core, index) => (
                <div className="w-[80%] mx-auto md:w-[30%] mb-8" key={index}>
                  <Image
                    src={`/${core.name}.webp`}
                    alt={core.name}
                    width={500}
                    height={500}
                  />
                  <TeamCard
                    name={core.name}
                    designation={core.designation}
                    subcard={true}
                  />
                </div>
              ))}
            </div>
            <h1 className="text-2xl font-cerealMed mb-8 mt-4">
              Under-Secretary General
            </h1>
            <div className="--faculty-cards flex flex-wrap justify-between">
              {secretaryData.map((sec, index) => (
                <TeamCard
                  name={sec.name}
                  designation={sec.designation}
                  key={index}
                />
              ))}
            </div>
            <h1 className="text-2xl font-cerealMed mb-8 mt-4">
              Friends of VITMUNSoc
            </h1>
            <div className="--faculty-cards flex flex-wrap justify-center gap-[4%]">
              {friends.map((sec, index) => (
                <div className="w-[48%] md:w-[22%] mb-8" key={index}>
                  <div className="w-full aspect-[1]">
                    <Image
                      src={`/${sec.name}.webp`}
                      alt={sec.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full brightness-110"
                    />
                  </div>
                  <TeamCard
                    name={sec.name}
                    designation={sec.designation}
                    key={index}
                    subcard_small={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Teams;
const friends = [
  {
    name: "Manan Sharama",
    designation: "SPONSORSHIP",
  },
  {
    name: "Shreyansh Mathur",
    designation: "SPONSORSHIP",
  },
  {
    name: "Anubhav Aryan",
    designation: "TECHNOLOGY",
  },
  {
    name: "Anuj Parihar",
    designation: "TECHNOLOGY",
  },
  {
    name: "Aryan Bharti",
    designation: "TECHNOLOGY",
  },
  {
    name: "Keshav Aneja",
    designation: "TECHNOLOGY",
  },
];
const secretaryData = [
  {
    name: "Joshua Daniel",
    designation: "ADMINISTRATION",
  },
  {
    name: "Prashanti Jagganathan",
    designation: "ADMINISTRATION",
  },
  {
    name: "Vrinda Bajaj",
    designation: "ADMINISTRATION",
  },
  {
    name: "Anushka Mishra",
    designation: "COMMUNICATIONS",
  },
  {
    name: "Arsh Misra",
    designation: "COMMUNICATIONS",
  },
  {
    name: "Vansh Kalantri",
    designation: "COMMUNICATIONS",
  },
  {
    name: "Darsh Tripathi",
    designation: "CONFERENCE SERVICES",
  },
  {
    name: "Govind Khandelwal",
    designation: "CONFERENCE SERVICES",
  },
  {
    name: "Neha Sachan",
    designation: "CONFERENCE SERVICES",
  },
  {
    name: "Veydant Katyal",
    designation: "CONFERENCE SERVICES",
  },
  {
    name: "Kahaan Doshi",
    designation: "DELEGATE AFFAIRS",
  },
  {
    name: "Sneha Banerjee",
    designation: "DELEGATE AFFAIRS",
  },
  {
    name: "Aditya Parihar",
    designation: "DESIGN AND MEDIA",
  },
  {
    name: "Amritanshu",
    designation: "DESIGN AND MEDIA",
  },
  {
    name: "Anuja Mishra",
    designation: "DESIGN AND MEDIA",
  },
  {
    name: "Agatsya Mishra",
    designation: "FINANCE",
  },
  {
    name: "Ayushman Kumar",
    designation: "FINANCE",
  },
  {
    name: "Madhuvanthi",
    designation: "HOSPITALITY",
  },
  {
    name: "Rishabh Singh",
    designation: "HOSPITALITY",
  },
  {
    name: "Vihan Shukla",
    designation: "HOSPITALITY",
  },
  {
    name: "Priyansh Desai",
    designation: "PUBLICITY AND MARKETING",
  },
  {
    name: "Ritvik Garg",
    designation: "PUBLICITY AND MARKETING",
  },
  {
    name: "Sunny Gogoi",
    designation: "PUBLICITY AND MARKETING",
  },
  {
    name: "Abhay Sastha",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Aditya Agarwal",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Aprahmeyha Srivastav",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Lakshya Jain",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Mukesh Sharma",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Kasvi Singh",
    designation: "REGISTRATIONS AND RECEPTION",
  },
  {
    name: "Ajitesh Anand",
    designation: "SPONSORSHIP",
  },
  {
    name: "Annapurna Jolly",
    designation: "SPONSORSHIP",
  },
  {
    name: "Ashwin",
    designation: "SPONSORSHIP",
  },
  {
    name: "Sushane Makkar",
    designation: "SPONSORSHIP",
  },
  {
    name: "Ayush Kumar",
    designation: "TECHNOLOGY",
  },
  {
    name: "Jathin Vazhayil",
    designation: "TECHNOLOGY",
  },
];
const coreData = [
  {
    name: "Avyukt Harsh Agrawal",
    designation: "SECRETARY GENERAL",
  },
  {
    name: "Aniket Rangadhar Perai",
    designation: "DEPUTY SECRETARY GENERAL",
  },
  {
    name: "Harshvardhan Garg",
    designation: "DEPUTY SECRETARY GENERAL",
  },
  {
    name: "Raghav Mittal",
    designation: "DIRECTOR GENERAL",
  },
  {
    name: "Arushi Tewari",
    designation: "DIRECTOR GENERAL",
  },
  {
    name: "Aaron Mano Cherian",
    designation: "CHARGE D'AFFAIRES",
  },
  {
    name: "Shubham Rathore",
    designation: "CHARGE D'AFFAIRES",
  },
];
const facultyData = [
  {
    name: "Dr. Sujatha R",
    designation: "ADMINISTRATION AND OUTREACH",
  },
  {
    name: "Dr. Senthil Kumar M",
    designation: "ADMINISTRATION AND OUTREACH",
  },
  {
    name: "Dr. Sankar Ganesh S",
    designation: "FINANCES AND SPONSORSHIPS",
  },
  {
    name: "Dr. Joel J",
    designation: "FINANCES AND SPONSORSHIPS",
  },
  {
    name: "Dr. Aarthy S.L.",
    designation: "COMMUNICATIONS AND REGISTRATIONS",
  },
  {
    name: "Dr. Pradheep T",
    designation: "COMMUNICATIONS AND REGISTRATIONS",
  },
  {
    name: "Dr. Sudhakar N",
    designation: "HOSPITALITY AND TRANSPORTATION",
  },
  {
    name: "Dr. Belwin Edward J",
    designation: "HOSPITALITY AND TRANSPORTATION",
  },
  {
    name: "Dr. Sharmila N",
    designation: "CONFERENCE SERVICES",
  },
  {
    name: "Dr. Archana T",
    designation: "CONFERENCE SERVICES",
  },
];
