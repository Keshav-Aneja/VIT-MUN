import React, { useState } from "react";
import Image from "next/image";
import MarqueeBar from "@/components/MarqueeBar";
import Link from "next/link";
import Help from "@/components/common/Help";
import IndividualRegPopUp from "@/components/IndividualRegPopUp";
import { motion } from "framer-motion";
const Landing = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <div className="w-full min-h-fit h-full">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/hero-bg.svg"
          alt="VIT_MUN"
          width={1000}
          height={1000}
          className="h-full scale-y-115 md:h-[80%] w-auto absolute -translate-y-[27%] md:-translate-y-[20%] left-1/2 -translate-x-1/2"
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
            <Link href="/invite">
              <button className="px-6 py-2 bg-white rounded-l-full outline-none border-0 shadow-[0px_10px_25px_rgba(0,0,0,0.2)] cursor-pointer tracking-wider hover:bg-offwhite transition-all duration-100 ease-linear">
                DELEGATION REGISTRATION
              </button>
            </Link>

            <button
              className="px-6 py-2 bg-white rounded-r-full outline-none border-0 font-cerealMed  shadow-[0px_10px_25px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-offwhite transition-all duration-100 ease-linear"
              onClick={() => setOpenPopUp(true)}
            >
              INDIVIDUAL REGISTRATION
            </button>
          </div>
          {openPopUp && (
            <>
              <IndividualRegPopUp setOpen={setOpenPopUp} />
              <motion.div
                className="overlay fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] z-[200]"
                onClick={() => setOpenPopUp(false)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </>
          )}
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
      <div className="w-[80%] mx-auto pt-32" id="about">
        <div className="--container-1 h-fit py-20 md:py-0 md:h-[60vh] flex-col md:flex-row flex justify-between">
          <section className="w-full md:w-[40%]"></section>
          <section className="w-full md:w-[50%] flex gap-4 flex-col text-sm md:text-base font-cereal">
            <motion.h1
              className="text-3xl md:text-5xl font-cerealMed mb-6"
              initial={{ translateY: -40, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: true }}
            >
              We at VITMUNSoc.
            </motion.h1>
            <motion.p
              className=" leading-6 md:leading-8 md:w-[80%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              The VIT Model United Nations Society (VITMUNSoc) is a model of
              excellence, teaching argumentation, diplomacy, public speaking,
              and more to its members and the VIT student community.
            </motion.p>
            <motion.p
              className=" leading-6 md:leading-8 md:w-[80%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              It has become one of India's top MUN societies, winning awards
              with each effort.
            </motion.p>
          </section>
        </div>
        <div className="--container-2 h-fit py-20 md:py-0 md:h-[60vh] flex flex-col md:flex-row justify-between">
          <section className="w-full md:w-[50%] flex gap-4 flex-col text-sm md:text-base font-cereal">
            <motion.h1
              className="text-3xl md:text-5xl font-cerealMed mb-6"
              initial={{ translateY: -40, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Delegate at VITMUN.
            </motion.h1>
            <motion.p
              className=" leading-6 md:leading-8 md:w-[80%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Choose VITMUN'24 for immersive simulations, skill refinement, and
              cultural awareness. Elevate your leadership potential amidst a
              diverse cohort.
            </motion.p>
            <motion.p
              className="leading-6 md:leading-8 md:w-[80%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              With extensive exposure and industry engagement, it's more than
              just a conference—it's a pathway to global impact and personal
              growth.
            </motion.p>
          </section>
          <section className="w-full md:w-[40%]"></section>
        </div>
      </div>
      <Help />
    </div>
  );
};

export default Landing;
