import React from "react";
import Item from "./Item";

const Card = ({
  heading,
  title1,
  title2,
  description1,
  description2,
  icon1,
  icon2,
  iconBg1,
  iconBg2,
  subTitle,
}) => (
  <div>
    <div>
      <h4 className="text-[2em] md:text-5xl font-lato font-medium text-[#0A1424]">
        {heading}
      </h4>
      <p className="text-[21px] leading-[46px] text-[#727272] font-lato">
        {subTitle}
      </p>
    </div>
    <div className="flex flex-col gap-y-4">
      <Item
        Title={title1}
        icon={icon1}
        iconBg={iconBg1}
        descripe={description1}
      />
      <Item
        Title={title2}
        icon={icon2}
        iconBg={iconBg2}
        descripe={description2}
      />
    </div>
  </div>
);

export default Card;
