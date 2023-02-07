import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { job, shortTitle, profilePhoto, name, description } =
    testiMonialDetail;

  return (
    <div className="item  drop-shadow-lg flex flex-col gap-y-6">
      <div className="flex items-end gap-3">
        <img className="img-circle block" src={profilePhoto} alt={name} />
        <div>
          <h4 className="text-xl  text-white md:text-[#525252] font-lato font-medium ">
            {name}
          </h4>
          <span className="text-[12px]  text-white md:text-[#525252]">
            {job}
          </span>
        </div>
        <div className="star flex gap-2 text-[#ff711c] flex-wrap">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <h3 className="text-xl  text-white md:text-[#525252] text-center font-lato font-bold">
        {shortTitle}
      </h3>
      <p className="text-base  text-white md:text-[#525252] text-justify font-lato">
        {description}
      </p>
    </div>
  );
};

export default TestiMonialsDetails;
