import React from "react";
import captchaImg from "../../assets/captcha.png";
const About = () => {
  return (
    <section className="px-5 pt-24 lg:px-16 xl-px-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="col-span-7 about_the_project">
          <div className="flex flex-col gap-y-7">
            <div>
              <h2 className="text-[50px] text-white leading-[70px]">
                About the <span className="text-skin-purple">project.</span>
              </h2>
              <p className="text-sm text-skin-light font-lato">
                <b className="text-skin-purple">SOLVE3</b> was built during the
                Polygon Buidl It hackathon (2022) and is therefore still very
                early. It was fun to buidl and we think there is a market for a
                service like SOLVE3.The demo is at a proof of concept level and
                there is still a lot of development to be done.
              </p>
            </div>
            <div className="block md:hidden col-span-5">
              <img
                className="h-[455px] mx-auto md:mx-0 md:ml-auto"
                src={captchaImg}
                alt="captha-image"
              />
            </div>
            <div className=" ml-0 md:ml-5">
              <h2 className="text-xl text-white">What's next?</h2>
              <p className="text-sm text-skin-light">
                We are looking forward to bring up a public beta during the next
                few weeks. During this time we want to find projects as beta
                testers to find out what we can improve and how it is accepted
                by the users.‍ The opinion of the community is very important to
                us, if you also want to tell us your opinion, please contact us
                on
                <span>Twitter</span>.
              </p>
            </div>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>

        <div className="hidden md:block col-span-5">
          <img
            className="h-[455px] mx-auto md:mx-0 md:ml-auto"
            src={captchaImg}
            alt="captha-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
