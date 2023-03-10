import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import FeatureImage from "./FeatureImage";
import Card from "./Card";
import AdvantageSvg from "../../assets/Advantage.svg";
import Strength from "../../assets/Strength.svg";
import value from "../../assets/value.svg";
import developer from "../../assets/developer.svg";
const WhySolve = () => (
  <section className="px-5 lg:px-16 2xl-px-0 my-16 bg-[#EAEAEA]">
    <div className="wrap py-10 lg:pb-1 md:pb-[14rem]">
      <div className="text-center">
        <h2 className="text-6xl text-skin-purple">Why Solve</h2>
        <p className="text-[#0A1424] text-xl leading-[47px]">Because.</p>
      </div>
      <main className="pt-16 2xl:min-h-[1617px] flex flex-col gap-y-14 2xl:gap-y-[26rem]">
        {/* :::::Left Column :::::: */}
        <div className="grid gap-y-16 md:gap-y-[13rem] grid-cols-1 md:gap-x-12 lg:grid-cols-2">
          {/* features FeatureImage */}
          <div className="min-h-[255px]">
            <FeatureImage img={card1} />
          </div>
          <Card
            heading="Bots are a problem"
            subTitle="The faster the bot, the more its owner has to gain"
            title1="Advantage"
            description1="Whether in web3 games, limited NFT sales or when buying tickets to your favourite crypto event (see EthCC), bots provide an unfair advantage for some and skewed conditions for participation for others."
            icon1={AdvantageSvg}
            iconBg1={"bg-[#fe66cb33]"}
            title2="Strength"
            description2="While it is okay to deploy and utilise the strengths of bots in some areas (i.e. arbitrage trading), in other areas their usage is very problematic."
            icon2={Strength}
            iconBg2={"bg-[#64b5f633]"}
          />
        </div>
        {/* ::::: Right Column :::::::: */}
        <div className="grid grid-cols-1 pb-[2rem] md:gap-x-12 lg:grid-cols-2">
          <Card
            heading="Bots are a business"
            subTitle="Developing, selling and using bots is a lucrative business model."
            title1="Value"
            description1="The advantage they provide can be expressed in pure $ value. Browsing through fiverr, for example, shows quickly how much money people can earn with making and selling bots. The money generated for those who use the bots is hard to calculate. "
            icon1={value}
            iconBg1={"bg-[#00efd180]"}
            title2="Developers"
            description2="There are professional bot developers because the current solution for the bot problem are simply more bots. ."
            icon2={developer}
            iconBg2={"bg-[#6dc9f74d]"}
          />

          {/* features image */}
          <div className="min-h-[254px]">
            <FeatureImage img={card2} />
          </div>
        </div>
      </main>
    </div>
  </section>
);

export default WhySolve;
