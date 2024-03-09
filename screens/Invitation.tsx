"use client";

import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import InputBox from "@/components/InputBox";
import Image from "next/image";
import Help from "@/components/common/Help";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DelegatesType } from "@/types/form";
import axios from "axios";

const Invitation = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const [allotmentLink, setAllotmentLink] = useState("");

  const [form, setForm] = useState<DelegatesType>({
    OrganizationName: "",
    HeadDelegate: "",
    EmailID: "",
    ContactNumber: "",
    DelegationStrength: "",
    AllotmentPreferences: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleAllotmentLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAllotmentLink(e.target.value);
    setForm({ ...form, AllotmentPreferences: e.target.value });
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
        `${process.env.NEXT_PUBLIC_API_URL}/register/delegate`,
        form
      );
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(err.response.error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="w-full h-full min-h-fit">
        <div className="--container w-[90%] h-full mx-auto mt-6">
          <Heading
            heading={"Request An Invite"}
            subHeading="Fill out the form below if your delegation hasn't received an invite yet."
          />
          <div className="--form w-[90%] mx-auto py-8 md:py-24 p-6 md:p-24 bg-white rounded-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]  my-20">
            <form action="" onSubmit={handleSubmit}>
              <div className="--invitation-info w-full flex  justify-between flex-wrap mb-12">
                <div className="w-full flex justify-center">
                  <InputBox
                    onChange={handleChange}
                    id="OrganizationName"
                    name="organization_name"
                    placeholder="Organization"
                    label="Organization Name"
                  />
                </div>
                <InputBox
                  onChange={handleChange}
                  id="HeadDelegate"
                  name="head_delegate"
                  placeholder="Name"
                  label="Head Delegate"
                />
                <InputBox
                  name="email"
                  placeholder="Email"
                  label="Email-ID"
                  onChange={handleChange}
                  id="EmailID"
                />
                <InputBox
                  name="contact"
                  placeholder="Whatsapp Number"
                  label="Contact Number"
                  onChange={handleChange}
                  id="ContactNumber"
                />
                <InputBox
                  name="delegation"
                  placeholder="Number"
                  label="Delegation Strength"
                  onChange={handleChange}
                  id="DelegationStrength"
                />
              </div>
              <div className="buttons w-full flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                <button
                  type="button"
                  className="px-2 md:px-6 py-4 rounded-lg bg-[#8e8a8a] text-white font-cereal flex gap-2 text-sm md:text-base text-nowrap justify-center items-center"
                  onClick={() => setOpenUpload(true)}
                >
                  <Image
                    src="/arrow-up.svg"
                    alt="Arrow"
                    width={50}
                    height={50}
                    className="w-4 md:w-6 aspect-square"
                  />
                  <p>Upload Allotment Preferences</p>
                </button>
                <div
                  className={`${
                    openUpload ? "block" : "hidden"
                  } upload-allotment-preference p-8 w-[80%] md:w-[40%] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-xl  shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-xl z-[250] flex flex-col items-end`}
                >
                  <div className="flex flex-col gap-2 w-full mb-8">
                    <label
                      htmlFor={"allotment_preference"}
                      className="text-lg font-cereal"
                    >
                      Allotment Preference
                    </label>
                    <input
                      id="AllotmentPreferences"
                      type="text"
                      name={"allotment_preference"}
                      placeholder={"Paste Your Link Here..."}
                      className="w-full border-2 border-[#00000050] rounded-lg outline-none px-4 py-2"
                      onChange={handleAllotmentLinkChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-[#1f75bc] rounded-lg px-6 py-2 text-white font-cerealMed text-sm md:text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)] w-fit"
                    onClick={() => setOpenUpload(false)}
                  >
                    ADD
                  </button>
                </div>
                <div
                  className={`overlay bg-[rgba(0,0,0,0.2)] fixed top-0 left-0 w-screen h-screen z-[200] ${
                    openUpload ? "block" : "hidden"
                  }`}
                  onClick={() => setOpenUpload(false)}
                ></div>
                <button
                  type="submit"
                  className="bg-[#1f75bc] rounded-lg px-6 py-2 text-white font-cerealMed text-base md:text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]"
                >
                  REQUEST
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

export default Invitation;
