import React from "react";
import { useState } from "react";
import NavMenu from "./NavMenu";
// import Fade from "react-reveal";
import { Avatar } from "@mui/material";
import avatar from "../../public/images/about/avatar.jpg"
import Switcher from "../theme/Switcher.jsx";
const Navbar = () => {
  const [draweropen, setDraweropen] = useState(true);

  return (
    <>

        <div className="flex justify-between items-center bg-background  dark:bg-[#0a3368] 
                      w-full px-20 py-3 z-20 text-white  lg:px-6 fixed  ">
          <h1 className="text-[32px] lg:text-[24px] inline cursor-pointer font-OswaldRegular duration-700">
            Dev_24
          </h1>
          <nav
            className={` flex justify-center items-center gap-x-10 ${draweropen &&
              "lg:hidden"
              } lg:fixed lg:top-[114px] xl:top-16 z-20 lg:bg-Forground lg:opacity-100 
               lg:h-[490px] md:opacity-100 w-[100%] md:right-0 md:text lg:items-start cursor-pointer 
              animate__slideInRight dark:lg:bg-gray_font`} >

            <NavMenu setDraweropen={setDraweropen} draweropen={draweropen} />
          </nav>
          <div className="lg:hidden">
            <Switcher />
          </div>
          <div className="flex">
            <div className="z-110">
            </div>
            <Avatar
              src={avatar}
              className=' border-2 border-Orange cursor-pointer '
              sx={{
                height: 90,
                width: 90,
                // display:"none"
                display: {
                  xl: "none",
                  lg: "none",
                  md: "block",
                  sm: "block",
                  xs: "block",
                },
              }}
            />
          </div>
          <div className="duration-700">
            <span className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
              onClick={() => setDraweropen(!draweropen)}>
            </span>
          </div>
        </div>

    </>
  );
}

export default Navbar;
