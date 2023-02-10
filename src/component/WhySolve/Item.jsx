import React from "react";

const Item = ({ icon, iconBg, Title, descripe }) => (
  <div className="flex gap-x-5">
    <div>
      <div
        className={`w-[60px] h-[60px] rounded-full ${iconBg} flex items-center justify-center`}
      >
        <img src={icon} alt="avgage" />
      </div>
    </div>
    <div>
      <h4 className="text-[20px] leading-[29px] text-[#222]">{Title}</h4>
      <p className="text-[1.2125em] text-[#727272]">{descripe}</p>
    </div>
  </div>
);

export default Item;
