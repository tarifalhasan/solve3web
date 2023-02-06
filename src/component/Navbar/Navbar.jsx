import React from "react";

import logo from "../../assets/solve3-logo.svg";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constant/data";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="bg-transparent px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
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
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:inline text-skin-purple   focus:outline-none border border-[#8c00ff] font-bold  rounded-lg text-base py-1.5 px-12 text-center mr-3 md:mr-0"
          >
            Button
          </button>
          <FiMenu className="text-white md:hidden" size={36} />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row gap-6">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
