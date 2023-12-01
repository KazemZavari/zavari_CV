import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkModeToggle from "react-dark-mode-toggle";
import NavMenu from "./NavMenu";


const Navbar = () => {
  const [draweropen, setDraweropen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 1 ||
      document.documentElement.scrollTop > 1
    ) {
      document.querySelector(".btn").style.backgroundColor = "#FFB86C";
      document.querySelector(".navbar").classList.add("navbar-opacity");
    } else {
      document.querySelector(".btn").style.backgroundColor = "#282A36";
      document.querySelector(".navbar").classList.remove("navbar-opacity");
    }
  }

  return (
    <>
      <div className="navbar flex justify-between items-center px-20 py-6 bg-transparent z-40
                     text-white lg:px-6 fixed w-full ">
        <h1 className="text-[32px] cursor-pointer font-OswaldRegular">Dev_24</h1>
   
        <nav
          className={` flex justify-center items-center gap-x-10 ${draweropen && "lg:hidden"
            } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717] lg:opacity-90 
               lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          {/* <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla ">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla   ">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla  ">
              <AnchorLink href="#projects" offset='30'>Projects</AnchorLink>
            </li>
          </ul> */}
<NavMenu />
        

          {/* <AnchorLink href="#contactForm" offset='95'
            className="btn border-[2px] border-white border-solid py-2 px-4 text-[18px]
                              font-MontserratBold hover:bg-Orange hover:text-Comment ">
            Let's Connect
          </AnchorLink> */}

        </nav>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={55}
        />
        <i
          onClick={(e) => setDraweropen(!draweropen)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer "
        ></i>
      </div>
    </>
  );
}

export default Navbar;
