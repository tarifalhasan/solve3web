import React from "react";
import image from "../../assets/Unbenanntes Diagramm.drawio.png";
const Project = () => {
  return (
    <section className=" py-20 mx-auto w-full md:w-[80%]  px-5 lg:px-10 2xl:px-0 2xl:w-full">
      <div className="text-center">
        <h2 className="font-lato font-bold text-4xl md:text-7xl text-[#F5F5F5]">
          Project
        </h2>
      </div>
      <div className="pt-7">
        <h3 className="text-xl text-skin-purple py-4">
          Boot Protection for smart contracts
        </h3>
        <p className="text-[22px] font-medium leading-[37px] font-lato text-skin-light">
          Instead of interacting with the smart contract directly, a user has to
          solve a captcha before executing the transaction. Therefore the user
          needs to sign a message, based on the signed message a captcha is
          created
        </p>
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
          <p className="text-[22px] font-medium leading-[37px] font-lato text-skin-light">
            Instead of interacting with the smart contract directly, a user has
            to solve a captcha before executing the transaction. Therefore the
            user needs to sign a message, based on the signed message a captcha
            is created۔
          </p>
          <div className="relative pt-5 mx-auto ">
            <div className="rounded-lg  w-[336px] md:w-[420px] z-20  bg-white h-[317px]">
              <img src={image} className="p-2" alt="" />
            </div>
            <div className="rounded-lg -z-20 absolute  top-[11%] md:top-[17%] left-[-3%] md:left-[-7%] bg-skin-dark-200 border-2 border-[#FE66CB] w-[336px] md:w-[420px] h-[317px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
