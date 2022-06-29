import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo-dark.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center py-7 p-5">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-gray-500 md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "How It Works", "Documentation", "Support"].map((item, index) => (
          <NavBarItem href="https://www.youtube.com/watch?v=4FFPcbcirMA" key={item + index} title={item} />
        ))}
        <li className="text-zap-black border-solid border-2 navButton hover:shadow-xl border-zap-black font-bold bg-zap-white py-2 px-7 mx-4 rounded-md cursor-pointer hover:bg-[#424040] hover:text-zap-white">
          Send Money
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-zap-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-zap-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-8 font-bold w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md nav-morph text-zap-black animate-slide-in"
          >
            <li className="text-xl w-full"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "How It Works", "Documentation", "Support", "Send Money"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;