import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import InputBox from "@/components/InputBox";
import Image from "next/image";
import Help from "@/components/common/Help";
const Invitation = () => {
  const [openUpload, setOpenUpload] = useState(false);
  const [allotmentLink, setAllotmentLink] = useState("");
  return (
    <div className="w-full h-full min-h-fit">
      <div className="--container w-[90%] h-full mx-auto">
        <Heading
          heading={"Request An Invite"}
          subHeading="Fill out the form below if your delegation hasn’t received an invite yet."
        />
        <div className="--form w-[90%] mx-auto p-24 bg-white rounded-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)] my-20">
          <form action="">
            <div className="--invitation-info w-full flex  justify-between flex-wrap mb-12">
              <div className="w-full flex justify-center">
                <InputBox
                  name="organization_name"
                  placeholder="Organization"
                  label="Organization Name"
                />
              </div>
              <InputBox
                name="head_delegate"
                placeholder="Name"
                label="Head Delegate"
              />
              <InputBox name="email" placeholder="Email" label="Email-ID" />
              <InputBox
                name="contact"
                placeholder="Whatsapp Number"
                label="Contact Number"
              />
              <InputBox
                name="delegation"
                placeholder="Number"
                label="Delegation Strength"
              />
            </div>
            <div className="buttons w-full flex justify-between">
              <button
                type="button"
                className="px-6 py-4 rounded-lg bg-[#8e8a8a] text-white font-cereal flex gap-2"
                onClick={() => setOpenUpload(true)}
              >
                <Image
                  src="/arrow-up.svg"
                  alt="Arrow"
                  width={50}
                  height={50}
                  className="w-6 h-6"
                />
                <p>Upload Allotment Preferences</p>
              </button>
              <div
                className={`${
                  openUpload ? "block" : "hidden"
                } upload-allotment-preference p-8 w-[40%] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-xl  shadow-[0px_0px_15px_rgba(0,0,0,0.2)] rounded-xl z-[250] flex flex-col items-end`}
              >
                <div className="flex flex-col gap-2 w-full mb-8">
                  <label
                    htmlFor={"allotment_preference"}
                    className="text-lg font-cereal"
                  >
                    Allotment Preference
                  </label>
                  <input
                    type="text"
                    name={"allotment_preference"}
                    placeholder={"Paste Your Link Here..."}
                    className="w-full border-2 border-[#00000050] rounded-lg outline-none px-4 py-2"
                    onChange={(e) => setAllotmentLink(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="bg-[#1f75bc] rounded-lg px-6 py-2 text-white font-cerealMed text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)] w-fit"
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
                className="bg-[#1f75bc] rounded-lg px-6 py-2 text-white font-cerealMed text-xl shadow-[0px_0px_20px_rgba(31,117,188,0.5)]"
              >
                REQUEST
              </button>
            </div>
          </form>
        </div>
        <Help />
      </div>
    </div>
  );
};

export default Invitation;
