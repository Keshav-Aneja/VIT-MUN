import React from "react";
import Image from "next/image";
import MarqueeBar from "@/components/MarqueeBar";
import Link from "next/link";
import Help from "@/components/common/Help";
const Landing = () => {
  return (
    <div className="w-full min-h-fit h-full">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="h-[40%] md:h-[75%] w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-full h-[63%] relative flex flex-col gap-8 justify-center items-center">
          <Image
            src="/vit-mun-logo.webp"
            alt="VIT_MUN"
            width={1000}
            height={1000}
            className="h-[50%] md:h-[75%] w-auto "
          />
          <div className="btn-menu w-fit  flex gap-2  font-cereal text-xs scale-75 md:scale-100">
            <Link href="/registration/external">
              <button className="px-6 py-2 bg-white rounded-l-full outline-none border-0 shadow-[0px_0px_15px_rgba(0,0,0,0.2)] cursor-pointer tracking-wider">
                DELEGATION REGISTRATION
              </button>
            </Link>
            <Link href="/registration/internal">
              <button className="px-6 py-2 bg-white rounded-r-full outline-none border-0 font-cerealMed  shadow-[0px_0px_15px_rgba(0,0,0,0.2)] cursor-pointer">
                INDIVIDUAL REGISTRATION
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[30%] relative">
          <Image
            src="/hero-abstract.svg"
            alt="VIT_MUN"
            width={1000}
            height={1000}
            className="hidden md:block w-full absolute bottom-0 left-0"
          />
          <Image
            src="/hero-abstract-small.webp"
            alt="VIT_MUN"
            width={1000}
            height={1000}
            className="md:hidden w-full scale-[150%] absolute bottom-6 left-0"
          />
          <Image
            src="/flower.webp"
            alt="VIT_MUN"
            width={1000}
            height={1000}
            className="w-40 md:w-80 absolute -bottom-20 md:-bottom-40 -right-20 md:-right-40 rotation"
          />
          <Image
            src="/flower.webp"
            alt="VIT_MUN"
            width={1000}
            height={1000}
            className="w-40 md:w-80  absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 rotation2"
          />
        </div>
        <MarqueeBar />
      </div>
      <div className="w-[90%] mx-auto py-32">
        <div className="--container-1 h-fit py-20 md:py-0 md:h-[70vh] flex-col md:flex-row flex justify-between">
          <section className="w-full md:w-[40%]"></section>
          <section className="w-full md:w-[50%] flex gap-4 flex-col text-lg md:text-2xl font-cereal">
            <h1 className="text-3xl md:text-5xl font-cerealMed mb-6">
              We at VITMUNSoc.
            </h1>
            <p>
              The VIT Model United Nations Society (VITMUNSoc) is a model of
              excellence, teaching argumentation, diplomacy, public speaking,
              and more to its members and the VIT student community.
            </p>
            <p>
              It has become one of India's top MUN societies, winning awards
              with each effort.
            </p>
          </section>
        </div>
        <div className="--container-2 h-fit py-20 md:py-0 md:h-[70vh] flex flex-col md:flex-row justify-between">
          <section className="w-full md:w-[50%] flex gap-4 flex-col text-lg md:text-2xl font-cereal">
            <h1 className="text-3xl md:text-5xl font-cerealMed mb-6">
              Delegate at VITMUN.
            </h1>
            <p>
              Choose VITMUN'24 for immersive simulations, skill refinement, and
              cultural awareness. Elevate your leadership potential amidst a
              diverse cohort.
            </p>
            <p>
              With extensive exposure and industry engagement, it's more than
              just a conference—it's a pathway to global impact and personal
              growth.
            </p>
          </section>
          <section className="w-full md:w-[40%]"></section>
        </div>
      </div>
      <Help />
    </div>
  );
};

export default Landing;
