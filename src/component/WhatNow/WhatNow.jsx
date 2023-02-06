import React from "react";
import { whatNow } from "../../constant/data";
const WhatNow = () => {
  return (
    <section className=" mx-auto pb-10 px-5 lg:px-10 2xl:px-0 ">
      <div className="text-center">
        <h2 className="font-lato font-bold text-4xl text-[#F5F5F5]">
          What now?
        </h2>
        <p className="font-lato text-xl pt-5 text-skin-light">Fairness.</p>
      </div>
      <div className="grid pt-10 grid-cols-1 gap-12 lg:grid-cols-2">
        {whatNow.map((data) => (
          <div
            key={data.id}
            className="bg-[#0D1D35] rounded-[10px] p-4 md:p-10"
          >
            <h4 className="text-base md:text-2xl text-white font-roboto font-bold">
              {data.title}
            </h4>
            <p className="text-xs md:text-lg py-3 md:py-6 font-normal text-[#F5F5F5] font-roboto ">
              {data.description}
            </p>
            <p className="text-xs md:text-lg py-3 md:py-6 font-normal text-[#F5F5F5] font-roboto ">
              {data.description}
            </p>
            <p className="text-xs md:text-lg py-3 md:py-6 font-normal text-[#F5F5F5] font-roboto ">
              {data.description}
            </p>
            <button className="bg-transparent mt-6 h-[50px] w-[170px] border-2 rounded-md text-white text-[18px]">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatNow;
