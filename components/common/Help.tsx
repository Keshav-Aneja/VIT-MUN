import React from "react";

const Help = () => {
  return (
    <>
      <div className="text-black font-medium text-xl">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
              Raghav Mittal : +91-9717900417
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
