import React from "react";
import { whatElse } from "../../constant/data";
const WhatElse = () => {
  return (
    <section className=" mx-auto py-16 px-5 lg:px-16 2xl:px-0 ">
      <div className="text-center">
        <h2 className="font-lato font-bold text-4xl lg:text-6xl text-[#F5F5F5]">
          What else?
        </h2>
        <p className="font-lato text-xl pt-5 text-skin-light">Earn.</p>
      </div>
      <div className="grid grid-cols-1 pt-12 grid-row-3 gap-5">
        {whatElse.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 rounded-lg lg:gap-x-5 lg:grid-cols-11 bg-[#0D1D35] p-5"
          >
            <div className="col-span-4 aspect-w-16 aspect-h-9 ">
              <img
                className="w-full mx-auto h-full block  object-cover"
                src={item.featureImage}
                alt={item.title}
              />
            </div>
            <div className="col-span-7 flex flex-col gap-y-5">
              <h4 className="text-base md:text-2xl text-white font-roboto font-bold">
                {item.title}
              </h4>
              <p className="text-xs md:text-lg  font-normal text-[#F5F5F5] font-roboto ">
                {item.description1}
              </p>
              <p className="text-xs md:text-lg  font-normal text-[#F5F5F5] font-roboto ">
                {item.description2}
              </p>
              <p className="text-xs md:text-lg  font-normal text-[#F5F5F5] font-roboto ">
                {item.description3}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatElse;
