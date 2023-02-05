import React from "react";

const Home = () => {
  return (
    <section className="container mx-auto px-5 md:px-10">
      <div className="hero">
        <div className="text-center pt-8 flex flex-col gap-1 md:gap-y-[26px] opacity-100">
          <h2>
            Hi, I’m <b>SOLVE3</b>. <br />
            <span className="text-[19px] md:text-[50px]">
              Smart Contract Bot Protection
            </span>
          </h2>
          <p className="">
            The first service that protects smart contracts against bots to
            ensure that bots don't get an unfair advantage of web3 projects.
          </p>
          <div className="flex w-[74%] mx-auto flex-col md:flex-row justify-center gap-6">
            <button className="block text-base text-white bg-skin-purple px-7 py-2.5 rounded-md">
              Get Started
            </button>
            <button className="block text-base text-white bg-transparent border  px-7 py-2.5 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
