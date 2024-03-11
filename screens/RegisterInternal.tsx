"use client";

import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import InputBox from "@/components/InputBox";
import Labels from "@/components/common/Labels";
import SectionHeading from "@/components/common/SectionHeading";
import SectionSubHeading from "@/components/common/SectionSubHeading";
import DelegatePreferenceBox from "@/sections/DelegatePreferenceBox";
import DelegateExperienceBox from "@/sections/DelegateExperienceBox";
import Help from "@/components/common/Help";
import { InternalFormState } from "@/types/form";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const RegisterInternal = () => {
  const router = useRouter();

  const [form, setForm] = useState<InternalFormState>({
    ParticipantName: "",
    ParticipantRegNumber: "",
    ParticipantPhone: "",
    ParticipantEmail: "",
    CommitteePreference1: "",
    Committee1AllotmentPreference1: "",
    Committee1AllotmentPreference2: "",
    Committee1AllotmentPreference3: "",
    CommitteePreference2: "",
    Committee2AllotmentPreference1: "",
    Committee2AllotmentPreference2: "",
    Committee2AllotmentPreference3: "",
    CommitteePreference3: "",
    Committee3AllotmentPreference1: "",
    Committee3AllotmentPreference2: "",
    Committee3AllotmentPreference3: "",
    MUNDelegateCount: "",
    MUNDelegateExperience: "",
    MUNExecutiveCount: "",
    MUNExecutiveExperience: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let key in form) {
      if (form[key] === "") {
        toast.error(`Please fill out all the fields.`);
        return;
      }
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register/internal`,
        form
      );
      toast.success(response.data.message);
      router.push("/");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <main className="w-full h-full min-h-fit">
        <div className="--container w-[90%] h-full mx-auto mt-6">
          <Heading
            heading={"Internal Individual Registration"}
            subHeading="Fill out the form below if you are a student of VIT Vellore, and want to participate in VITMUN24."
          />
          <div className="--form w-[90%] mx-auto py-8 md:py-24 p-6 md:p-24 bg-white rounded-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]  my-20">
            <form action="" onSubmit={handleSubmit}>
              <div className="--participants-info w-full flex  justify-between flex-wrap mb-12">
                <InputBox
                  name="participant_name"
                  placeholder="Name"
                  label="Participant Name"
                  id="ParticipantName"
                  onChange={handleChange}
                />
                <InputBox
                  name="registration_number"
                  placeholder="2XBXX1234"
                  label="Registration Number"
                  id="ParticipantRegNumber"
                  onChange={handleChange}
                />
                <InputBox
                  name="contact_number"
                  placeholder="Whatsapp Number"
                  label="Contact Number"
                  id="ParticipantPhone"
                  onChange={handleChange}
                />
                <InputBox
                  name="email"
                  placeholder="Email"
                  label="Email - ID"
                  onChange={handleChange}
                  id="ParticipantEmail"
                />
              </div>
              <div className="--delegate-preference mb-12">
                <div className="flex gap-1 md:gap-4 flex-col md:flex-row">
                  <SectionHeading heading="Delegate Preference" />
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Li_euF7cmIb-GDwbUkA7NpRPcodf4x7OLDlM8I3l8IU/edit?usp=sharing"
                    target="_blank"
                  >
                    <Labels label="COUNTRY MATRIX" />
                  </a>
                </div>
                <SectionSubHeading heading="Registration fee per delegate is Rs. 1900 (inclusive of GST). Payment link will be mailed once allotment is confirmed" />
                <DelegatePreferenceBox id={1} onChange={handleChange} />
                <DelegatePreferenceBox id={2} onChange={handleChange} />
                <DelegatePreferenceBox id={3} onChange={handleChange} />
              </div>
              <div className="--delegate-experience">
                <div className="mb-6">
                  <SectionHeading heading="Experience" />
                </div>
                <DelegateExperienceBox
                  id={1}
                  onChange={handleChange}
                  boxType="Delegate"
                />
                <DelegateExperienceBox
                  id={2}
                  onChange={handleChange}
                  boxType="Executive"
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1f75bc] rounded-lg px-4 py-2 text-white font-cerealMed text-base md:text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]"
                >
                  PRESENT AND VOTING
                </button>
              </div>
            </form>
          </div>
          <Help />
        </div>
      </main>
    </>
  );
};

export default RegisterInternal;
