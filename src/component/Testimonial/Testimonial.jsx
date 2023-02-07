import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import { testiMonials } from "../../constant/data";
import clientPhoto from "../../assets/client.png";
const TestiMonials = () => {
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
        items: 2,
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
                <div class="item  drop-shadow-lg flex flex-col gap-y-6">
                  <div className="flex items-end gap-3">
                    <img
                      className="img-circle block"
                      src={clientPhoto}
                      alt="tarif"
                    />
                    <div>
                      <h4 className="text-xl  text-white md:text-[#525252] font-lato font-medium ">
                        Tarif Al Hasan
                      </h4>
                      <span className="text-[12px]  text-white md:text-[#525252]">
                        web deceloper
                      </span>
                    </div>
                    <div className="star flex gap-2 text-[#ff711c] flex-wrap">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <h3 className="text-xl  text-white md:text-[#525252] text-center font-lato font-bold">
                    It was very good experience
                  </h3>
                  <p className="text-base  text-white md:text-[#525252] text-justify font-lato">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae tempore ipsum dicta, cupiditate dolore temporibus
                    amet.
                  </p>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail, index) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={index}
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
