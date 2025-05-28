import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function: open if false, close if true
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <>
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 h-10 md:h-16 xl:h-20 px-3 md:px-6 lg:px-20 backdrop-blur-sm bg-black/50 shadow-[0_5px_10px_0px_rgba(0,0,0,0.5)] z-[800]">
      <div>
        <h1 className="text-xl font-bold tracking-wider xl:text-3xl">Pratik Grx</h1>
      </div>
      <nav>
        <ul className="hidden sm:flex text-lg lg:text-xl tracking-wide gap-4 md:gap-8 lg:gap-10 font-medium text-[#9b9b9b]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink

              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink

              to="/project"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink

              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="block sm:hidden text-2xl" onClick={toggleMenu}>
        <FaBars />
      </div>
      
    </div>
    <div
        className={`fixed top-0 right-0 w-screen h-screen bg-black/60 backdrop-blur-sm z-[999] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full w-full">
          <div  className="absolute top-8 right-8 z-[99] text-4xl">
            <IoClose onClick={toggleMenu}/>
          </div>
        <ul className="absolute top-0 left-0 right-0 bottom-0 z-[90] flex items-center justify-center flex-col gap-5 text-2xl font-medium mb-30">
          <li>
            <NavLink
            onClick={toggleMenu}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={toggleMenu}
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={toggleMenu}
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={toggleMenu}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#9b9b9b]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
