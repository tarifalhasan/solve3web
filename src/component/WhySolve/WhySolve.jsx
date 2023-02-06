import React from "react";
import { whySolveData } from ".././../constant/data";
import Card from "./Card";
const WhySolve = () => (
  <section className="my-16 py-14 bg-[#EAEAEA] px-10 lg:px-16 xl-px-0">
    <div className="text-center">
      <h2 className="text-skin-purple text-[50px] title">Why SOLVE3?</h2>
      <p className="sub-title text-[#0A1424]">Because.</p>
    </div>
    <div className="card">
      {whySolveData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          subTitile={data.subTitle}
          array={data.details}
          featuresImage={data.featuresImage}
        />
      ))}
    </div>
  </section>
);

export default WhySolve;
