import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import { NavLinks } from "../../constant/data";

import logo from "../../assets/solve3-logo.svg";
const MobileMenu = ({ openNavbar, isOpen }) => {
  return (
    <div
      className={`fixed mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full bg-skin-dark  ${
        isOpen ? "right-0" : "right-full"
      }  z-50 top-0 `}
    >
      <div className="logo  flex  justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            className="h-[49px] mr-3 sm:h-[56px]"
            alt="solve3web"
          />
          <h3 className="self-center  text-xl font-bold font-segoe whitespace-nowrap dark:text-white">
            SOLVE3
            <span className="self-center text-base  whitespace-nowrap font-segoe font-normal block text-white">
              WEB3 CAPTCHA
            </span>
          </h3>
        </div>
        <RxCross2
          onClick={() => openNavbar()}
          className="text-white "
          size={36}
        />
      </div>
      <ul className="flex flex-col pt-7 md:flex-row gap-6">
        {NavLinks.map((link) => (
          <li key={link.href} onClick={openNavbar}>
            <Link
              to={link.href}
              className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
              aria-current="page"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <button
          type="button"
          className=" mx-2 text-skin-purple   focus:outline-none border border-[#8c00ff] font-bold  rounded-lg text-base py-1.5 px-12 text-center mr-3 md:mr-0"
        >
          Button
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
