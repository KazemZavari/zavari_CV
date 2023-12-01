import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DarkModeToggle from "react-dark-mode-toggle";


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
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={55}
        />
        <nav
          className={` flex justify-center items-center gap-x-10 ${draweropen && "lg:hidden"
            } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717] lg:opacity-90 
               lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla ">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla   ">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla  ">
              <AnchorLink href="#projects" offset='30'>Projects</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/reayhs" target="_blank">
              <i className="fa-brands fa-telegram border-[2px] border-white p-2 rounded-[100%]
                            hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>

            <a href="https://www.instagram.com/iburakz/" target="_blank">
              <i className="fa-brands fa-whatsapp border-[2px] border-white p-2 rounded-[100%]
                        hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>
            <a
              href="https://github.com/Reayhs/react-tailwind-portfolio"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%]
                     hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange">
              </i>
            </a>
            <a href="https://twitter.com/reayhs" target="_blank">
              <i className="fa-brands fa-linkedin border-[2px] border-white p-2 rounded-[100%]
                            hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>
          </div>

          <AnchorLink href="#contactForm" offset='95'
            className="btn border-[2px] border-white border-solid py-2 px-4 text-[18px]
                              font-MontserratBold hover:bg-Orange hover:text-Comment ">
            Let's Connect
          </AnchorLink>

        </nav>
        <i
          onClick={(e) => setDraweropen(!draweropen)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer "
        ></i>
      </div>
    </>
  );
}

export default Navbar;
