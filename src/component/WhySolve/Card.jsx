import React from "react";
import img1 from "../../assets/card1.png";
import icon from "../../assets/Advantage.svg";
const Card = ({ featuresImage, title, subTitile, array }) => {
  return (
    <div className="grid gap-x-16 pt-20 grid-cols-1 lg:grid-cols-11">
      <div className="col-span-6 featuresImage"></div>
      <div className="col-span-5">
        <h3
          className="text-[38px] leading-[10px] font-la
         font-me
          color-[#0A1424] "
        >
          {title}
        </h3>
        <p className="w-[74%] py-6 text-[24px] leading-[28px] tracking-[0.01em] text-[#727272] font-lato font-normal">
          {subTitile}
        </p>
        <div className="flex flex-col gap-y-10">
          {array.map((item, index) => (
            <div key={index} className="flex gap-4 ">
              <div>
                <div
                  className={`bg-[${item.bgColor}] w-[64px]  h-[64px] rounded-full
                   flex items-center justify-center`}
                >
                  <img src={item.icon} alt="" />
                </div>
              </div>
              <div>
                <h2 className="font-jamjuree font-semibold text-[24px] leading-[28px] text-[#222222]">
                  {item.title}
                </h2>
                <p className="text-[#727272] text-[21px] leading-[27px] tracking-[0.01em] mt-[6px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
