import React from "react";
import Heading from "@/components/common/Heading";
import InputBox from "@/components/InputBox";
import Labels from "@/components/common/Labels";
import SectionHeading from "@/components/common/SectionHeading";
import DelegatePreferenceBox from "@/sections/DelegatePreferenceBox";
import DelegateExperienceBox from "@/sections/DelegateExperienceBox";
import Help from "@/components/common/Help";
const Register = () => {
  //   const [form, setForm] = useState({});
  return (
    <div className="w-full h-full min-h-fit">
      <div className="--container w-[90%] h-full mx-auto">
        <Heading
          heading={"Internal Individual Registration"}
          subHeading="Fill out the form below if you are a student of VIT Vellore, and want to participate in VITMUN24."
        />
        <div className="--form w-[90%] mx-auto p-24 bg-white rounded-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)] my-20">
          <form action="">
            <div className="--participants-info w-full flex  justify-between flex-wrap mb-12">
              <InputBox
                name="participant_name"
                placeholder="Name"
                label="Participant Name"
              />
              <InputBox
                name="registration_number"
                placeholder="2XBXX1234"
                label="Registration Number"
              />
              <InputBox
                name="contact_number"
                placeholder="Whatsapp Number"
                label="Contact Number"
              />
              <InputBox name="email" placeholder="Email" label="Email - ID" />
            </div>
            <div className="--delegate-preference mb-12">
              <div className="flex gap-4">
                <SectionHeading heading="Delegate Preference" />
                <Labels label="COUNTRY MATRIX" />
              </div>
              <DelegatePreferenceBox id={1} />
              <DelegatePreferenceBox id={2} />
              <DelegatePreferenceBox id={3} />
            </div>
            <div className="--delegate-experience">
              <div className="mb-6">
                <SectionHeading heading="Delegate Experience" />
              </div>
              <DelegateExperienceBox id={1} />
              <DelegateExperienceBox id={2} />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-[#1f75bc] rounded-lg px-4 py-2 text-white font-cerealMed text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]"
              >
                PRESENT AND VOTING
              </button>
            </div>
          </form>
        </div>
        <Help />
      </div>
    </div>
  );
};

export default Register;
