import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
          <div className="md:ml-auto flex flex-wrap items-center w-full md:w-fit justify-between md:justify-center text-black  md:gap-24 text-sm md:text-base">
            <Link className="" href="/committees">
              COMMITTEES
            </Link>
            <Link className=" " href="/about">
              ABOUT US
            </Link>
            <Link className=" " href="resources">
              RESOURCES
            </Link>
            <Link className=" " href="faqs">
              FAQs
            </Link>
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
            <div className="menu w-screen min-h-fit h-screen fixed top-0 left-0 bg-white p-8">
              <Image
                src="/menu-close.webp"
                width={100}
                height={100}
                className="w-4 absolute top-8 right-8"
                alt="close"
                onClick={() => setOpenMenu(false)}
              />
              <div className="--menu-items  flex flex-col h-full mt-24 w-full text-center gap-6 text-xl font-cerealMed tracking-wide">
                <Link className=" " href="/committees">
                  COMMITTEES
                </Link>
                <Link className=" " href="/about">
                  ABOUT US
                </Link>
                <Link className=" " href="resources">
                  RESOURCES
                </Link>
                <Link className=" " href="faqs">
                  FAQs
                </Link>
                <Image
                  src="/vit-mun-logo.webp"
                  alt="logo"
                  width={200}
                  height={100}
                  className="w-[50%] mx-auto mt-16"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;

// Path: components/common/Help.tsx
