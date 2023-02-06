import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import clientPhoto from "../../assets/client.png";
const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Leo",
      shortTitle: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      job: "Web Develoepr",
      clientName: "Leo",
      profilePhoto: clientPhoto,
      job: "Lead Designer",
    },
    {
      name: "Leo",
      shortTitle: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      job: "Web Develoepr",
      clientName: "Leo",
      profilePhoto: clientPhoto,
      job: "Lead Designer",
    },
    {
      name: "Leo",
      shortTitle: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      job: "Web Develoepr",
      clientName: "Leo",
      profilePhoto: clientPhoto,
      job: "Lead Designer",
    },
    {
      name: "Leo",
      shortTitle: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      job: "Web Develoepr",
      clientName: "Leo",
      profilePhoto: clientPhoto,
      job: "Lead Designer",
    },
    {
      name: "Leo",
      shortTitle: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      job: "Web Develoepr",
      clientName: "Leo",
      profilePhoto: clientPhoto,
      job: "Lead Designer",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="py-16 testimonials md:bg-white px-5">
      <div className="container mx-auto mt-5">
        <div className="text-center py-10 ">
          <h3 className="text-xl text-white md:text-[#525252] md:text-4xl">
            What Our Clients are Saying?
          </h3>
        </div>
        <div>
          <div>
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel

              owl-theme"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item"></div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;
