import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Help = () => {
  return (
    <>
      <div className="text-black font-medium text-xl font-cereal">
        <div className="w-[80%] mx-auto container flex  py-24 md:flex-row flex-col items-center">
          <section className="w-full md:w-[60%]">
            <div className="wrapper md:w-[70%] text-sm md:text-lg">
              <motion.div
                className="text-3xl md:text-5xl font-cerealMed mb-6"
                initial={{ translateY: -40, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                viewport={{ once: true }}
              >
                Need Help?
              </motion.div>
              <motion.div
                className="mb-4 md:mb-8 leading-6 md:leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We're here to help. Reach out to us via our official
                <span className="text-blue-600">
                  &nbsp;
                  <Link
                    href="https://www.instagram.com/vitmunsoc?igsh=dDF6bWVoOGxmdW5i"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                  ,{" "}
                  <Link href="https://www.linkedin.com/company/munsocvit/">
                    LinkedIn
                  </Link>
                  &nbsp;
                </span>
                and <span className="text-blue-600">Email.</span>
              </motion.div>
              <motion.div
                className="mb-4 md:mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                If you require any help with the registration process or
                delegate affairs, you can mail at:
              </motion.div>
              <motion.div
                className="mb-8 leading-relaxed text-blue-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a href="mailto:help.delegateaffairs@gmail.com">
                  help.delegateaffairs@gmail.com
                </a>
              </motion.div>
            </div>
          </section>
          {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-cerealMed">
              Need Help?
            </div>
            <div className="mb-8 leading-relaxed">
              We're here to help. Reach out to us via our official{" "}
              <span className="text-blue-600">Instagram, LinkedIn </span> and{" "}
              <span className="text-blue-600">Email.</span>
            </div>
            <div className="mb-8 leading-relaxed">
              If you want to speak to us over the phone, you can contact:
            </div>
            <div className="mb-8 leading-relaxed text-blue-600">
              Avyukt H Agrawal : +91-8903689328
              <br />
              Aniket R Perai: +91-9650686499
            </div>
          </div> */}
          <motion.section
            className="--qr-wrapper md:w-[40%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-[60%] md:w-[70%] mx-auto h-[80%] border-2 border-blue-500 p-4 md:p-8 rounded-2xl">
              <Image
                width={500}
                height={500}
                alt="QR-CODE"
                src="/qr-code.webp"
                className="w-full h-full"
              />
            </div>
          </motion.section>
          {/* <div className="lg:max-w-[35%] lg:w-full md:w-1/2 w-5/6 p-8 md:p-20 border-2 border-blue-500 rounded-xl md:scale-[90%]">
            <Image
              width={500}
              height={500}
              alt="QR-CODE"
              src="/qr-code.webp"
              className="w-full h-full"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Help;
