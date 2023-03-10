import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constant/data";
import logo from "../../assets/solve3-logo.svg";
import MobileMenu from "./MobileNav";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="relative z-[99999]">
      <nav>
        <div className="flex  items-center">
          <img src={logo} className="h-[49px]  sm:h-[56px]" alt="solve3web" />
          <h3 className="self-center  text-xl font-bold font-segoe whitespace-nowrap text-white">
            SOLVE3
            <span className="self-center text-[15px] leading-[36px]  whitespace-nowrap font-segoe font-normal block text-white">
              WEB3 CAPTCHA
            </span>
          </h3>
        </div>
        {/* Dekstop And Big Screen Navbar */}
        <div>
          <ul className="nav_item hidden md:flex items-center gap-10">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="hidden md:inline text-skin-purple   focus:outline-none border border-[#8c00ff] font-bold  rounded-sm text-base py-1 px-12 text-center mr-3 md:mr-0"
          >
            Button
          </button>
        </div>
        <BiMenu
          onClick={() => openNavbar()}
          className="text-white md:hidden"
          size={36}
        />
        {/* Mobile Menu */}
        <MobileMenu openNavbar={openNavbar} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
