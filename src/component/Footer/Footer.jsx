import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/solve3-logo.svg";
const Footer = () => (
  <footer className="pt-16 mt-24 pb-4 px-5 lg:px-16 md:bg-skin-dark-200">
    <div className="grid md:grid-cols-5 gap-y-8">
      <h2 className="col-span-3 text-center lg:text-left text-2xl text-skin-light">
        <span className="hidden lg:block">Get the latest updates.</span>
        Subscribe for our newsletter
      </h2>
      <div className="col-span-2 flex rounded-lg items-center border border-[#fff] py-1">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
    <Link to="/" className="flex mt-16 justify-center md:hidden items-center">
      <img
        src={logo}
        className="h-[49px] mr-3 sm:h-[56px]"
        alt="Flowbite Logo"
      />
      <h3 className="self-center  text-xl font-bold font-segoe whitespace-nowrap dark:text-white">
        SOLVE3
        <span className="self-center text-base  whitespace-nowrap font-segoe font-normal block text-white">
          WEB3 CAPTCHA
        </span>
      </h3>
    </Link>
    <div className="copy_right border-t border-white mt-16 py-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <ul className="flex items-center gap-3">
          <li className="text-sm text-white">
            <Link Link to="/privacy">
              Privacy
            </Link>
          </li>
          <li className="text-sm text-white">
            <Link Link to="/privacy">
              Privacy
            </Link>
          </li>
        </ul>
        <p className="text-sm text-skin-light">
          © Solve3. 2023 All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
