import React from "react";
import card1 from "../../assets/card1.png";
const WhySolve = () => (
  <section className="px-5 bg-[#EAEAEA]">
    <div className="wrap py-10">
      <div className="text-center">
        <h2 className="text-5xl text-skin-purple">Why Solve</h2>
        <p className="text-[#0A1424] text-xl leading-[47px]">Because.</p>
      </div>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="right_box relative">
            <div className="aspect-w-16 z-40 aspect-h-9">
              <img src={card1} alt="solve3webservice" />
            </div>
            <div className="aspect-w-12 bottom-20 md:bottom-40 w-[80%] left-10 lg:bottom-28 aspect-h-4">
              <div className="box_regtegle  bg-[#8C00FF33]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
);

export default WhySolve;
