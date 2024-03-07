import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <Image src="/VIT Logo.svg" alt="logo" width={200} height={100} />
          </Link>
          <div className="md:ml-auto flex flex-wrap items-center text-lg justify-center text-black gap-24">
            <Link className=" " href="/committees">COMMITTEES</Link>
            <Link className=" " href="/about">ABOUT US</Link>
            <Link className=" " href="resources">RESOURCES</Link>
            <Link className=" " href="faqs">FAQs</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
