import React from "react";

const Home = () => {
  return (
    <section className="container  mx-auto px-5 md:px-10">
      <div className="hero relative bg-opacity-80 z-50">
        <div className="hero_image"></div>
        <div className="  text-white text-center pt-16 md:pt-8 flex flex-col gap-1 md:gap-y-[16px] opacity-100">
          <h2>
            Hi, I’m <b>SOLVE3</b>. <br />
            <span className="text-[19px] md:text-[50px]">
              Smart Contract Bot Protection
            </span>
          </h2>
          <p>
            The first service that protects smart contracts against bots to
            ensure that bots don't get an unfair advantage of web3 projects.
          </p>
          <div className="grid mt-10 md:mt-0 md:flex  mx-auto flex-col md:flex-row justify-center gap-4 md:gap-7">
            <button className="btn-primary">Get Started</button>
            <button className="block text-base text-white bg-transparent border  w-[143px] py-2.5 ">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
