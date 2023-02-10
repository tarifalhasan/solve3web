import React from "react";
const Image = ({ img }) => (
  <div className="right_box h-[270px] md:h-[400px] relative">
    <div className="aspect-w-16 z-40 aspect-h-9">
      <img src={img} alt="solve3webservice" />
    </div>
    <div className="aspect-w-12 bottom-20 md:bottom-40 w-[80%] left-10 lg:bottom-[9rem] 2xl:[13rem] aspect-h-4">
      <div className="box_regtegle  bg-[#8C00FF33]"></div>
    </div>
  </div>
);

export default Image;
