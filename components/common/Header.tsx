import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openResourceMenu, setOpenResourceMenu] = useState(false);
  return (
    <>
      <div className="text-gray-600 body-font h-full hidden md:block">
        <div className="w-[80%] container mx-auto flex flex-wrap flex-col md:flex-row items-center h-full font-cereal">
          <Link href="/">
            <Image
              src="/VIT Logo.svg"
              alt="logo"
              width={200}
              height={100}
              className="h-[60%] w-auto"
            />
          </Link>
          <div className="md:ml-auto flex flex-wrap items-center w-full md:w-fit justify-between md:justify-center text-black  lg:gap-16 text-sm md:text-base">
            <Link
              className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear ${
                pathname === "/" ? "text-blue-500" : ""
              }`}
              href="/"
            >
              HOME
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear ${
                pathname === "/committees" ? "text-blue-500" : ""
              }`}
              href="/committees"
            >
              COMMITTEES
            </Link>
            <div
              className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear cursor-pointer flex gap-2 relative`}
              onClick={() => setOpenResourceMenu(!openResourceMenu)}
            >
              <p>RESOURCES</p>
              <Image
                src="/arrow.svg"
                alt="arrow"
                className="w-6"
                width={20}
                height={20}
              />
              {openResourceMenu && (
                <div className="overlay w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.2)]"></div>
              )}
              {openResourceMenu && (
                <div className="--menu p-2 bg-white text-black absolute top-8 left-0 border-[1px] border-[#aeaeae] rounded-lg">
                  <a href="">
                    <button className="px-6 py-2 bg-[rgba(203, 203, 203, 0.8)] text-xs text-nowrap hover:bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                      BACKGROUND GUIDES
                    </button>
                  </a>
                  <a href="">
                    <button className="px-6 py-2 bg-[rgba(203, 203, 203, 0.8)] text-xs text-nowrap hover:bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md">
                      CONFERENCE POLICY
                    </button>
                  </a>
                  <a href="">
                    <button className="px-6 py-2 bg-[rgba(203, 203, 203, 0.8)] text-xs text-nowrap hover:bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full text-left">
                      EQUITY POLICY
                    </button>
                  </a>
                </div>
              )}
            </div>
            <Link
              className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear `}
              href="https://docs.google.com/spreadsheets/d/1aiDSyScuZ9J1AyNFewX935Ekf8zwIBEgj-7i9KgCrQI/edit?usp=drivesdk"
            >
              ALLOTMENTS
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear `}
              href="/teams"
            >
              TEAM
            </Link>
            <a href="https://events.vit.ac.in/events/Vitmun24/" target="_blank">
              <button
                type="button"
                className="px-4 py-2 rounded-xl font-cerealMed text-white bg-[#1F75BC] shadow-[0px_0px_15px_#1F75BC70]"
              >
                PAY NOW
              </button>
            </a>
            {/* <Link
              className="border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear"
              href="/#about"
            >
              ABOUT US
            </Link> */}
            {/* <Link
              className="border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear"
              href="resources"
            >
              RESOURCES
            </Link> */}
            {/* <Link
              className="border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear"
              href="faqs"
            >
              FAQs
            </Link> */}
          </div>
        </div>
      </div>
      <div className="--mobile-nav text-gray-600 body-font h-full md:hidden">
        <div className="w-[80%] h-full container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/VIT Logo.svg"
              alt="logo"
              width={200}
              height={100}
              className="h-[60%] w-auto"
            />
          </Link>
          <Image
            src="/menu.webp"
            alt="logo"
            width={200}
            height={100}
            className="w-6 "
            onClick={() => setOpenMenu(true)}
          />
          {openMenu && (
            <motion.div
              className="menu w-screen min-h-fit h-screen fixed top-0 left-0 bg-white p-8"
              initial={{ translateX: 150, opacity: 0.5 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/menu-close.webp"
                width={100}
                height={100}
                className="w-4 absolute top-8 right-8"
                alt="close"
                onClick={() => setOpenMenu(false)}
              />
              <div className="--menu-items  flex flex-col h-full mt-4 w-full text-center gap-6 text-xl font-cerealMed tracking-wide scale-90">
                <Link className=" " href="/">
                  HOME
                </Link>
                <Link className=" " href="/committees">
                  COMMITTEES
                </Link>
                <div
                  className={`w-fit mx-auto  border-transparent  transition-all duration-200 ease-linear cursor-pointer flex flex-col gap-2 relative`}
                  onClick={() => setOpenResourceMenu(!openResourceMenu)}
                >
                  <span className="flex gap-2 mx-auto">
                    <p>RESOURCES</p>
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      className="w-6"
                      width={20}
                      height={20}
                    />
                  </span>
                  {openResourceMenu && (
                    <motion.div
                      className="--menu p-2 bg-white text-black relative top-2 left-0  rounded-lg z-[3000] flex flex-col gap-1"
                      initial={{ y: -10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <a href="">
                        <button className="px-6 py-2  text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          BACKGROUND GUIDES
                        </button>
                      </a>
                      <a href="">
                        <button className="px-6 py-2  text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          CONFERENCE POLICY
                        </button>
                      </a>
                      <a href="">
                        <button className="px-6 py-2  text-xs text-nowrap bg-[rgba(203,203,203,0.6)] transition-all duration-200 ease-linear rounded-md w-full">
                          EQUITY POLICY
                        </button>
                      </a>
                    </motion.div>
                  )}
                </div>
                <Link
                  className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear `}
                  href="https://docs.google.com/spreadsheets/d/1aiDSyScuZ9J1AyNFewX935Ekf8zwIBEgj-7i9KgCrQI/edit?usp=drivesdk"
                >
                  ALLOTMENTS
                </Link>
                <Link
                  className={`border-b-2 border-transparent hover:border-black transition-all duration-200 ease-linear `}
                  href="/teams"
                >
                  TEAM
                </Link>
                <a
                  href="https://events.vit.ac.in/events/Vitmun24/"
                  target="_blank"
                >
                  <button
                    type="button"
                    className="w-fit mx-auto px-4 py-2 rounded-xl font-cerealMed text-white bg-[#1F75BC] shadow-[0px_0px_15px_#1F75BC70]"
                  >
                    PAY NOW
                  </button>
                </a>
                {/* <Link className=" " href="/#about">
                  ABOUT US
                </Link>
                <Link className=" " href="resources">
                  RESOURCES
                </Link>
                <Link className=" " href="faqs">
                  FAQs
                </Link> */}
                <Image
                  src="/updated-vit-mun-logo.webp"
                  alt="logo"
                  width={200}
                  height={100}
                  className="w-[50%] mx-auto mt-16"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

// Path: components/common/Help.tsx
