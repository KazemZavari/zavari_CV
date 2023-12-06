import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import NavMenu from "./NavMenu";
import Fade from "react-reveal";
import { Avatar } from "@mui/material";
import avatar from "../../public/images/about/avatar.jpg"
const Navbar = () => {
  const [draweropen, setDraweropen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState();

  return (
    <><Fade>
      <div className="flex justify-between items-center bg-background 
                      w-full px-20  py-3 z-20 text-white lg:px-6 fixed ">
        <h1 className="text-[32px] lg:text-[25px] inline cursor-pointer font-OswaldRegular">
          Dev_24
          
          </h1>
        

        <nav
          className={` flex justify-center items-center gap-x-10 ${draweropen && 
            "lg:hidden"
            } lg:fixed lg:top-28 xl:top-16 z-20  lg:bg-background lg:opacity-95 
               lg:h-[490px]  w-[100%] md:right-0 md:text lg:items-start  cursor-pointer `}
        >
          <NavMenu setDraweropen={setDraweropen} draweropen={draweropen} />

        </nav>
        <div className="flex">
        <Avatar
                      src={avatar}
                      className='inline border-2 border-Orange cursor-pointer '
                      sx={{
                        height: 90,
                        width: 90,
                        display: {
                          xl: "none",
                          lg: "none",
                          md: "none",
                          sm: "block",
                          xs: "block",
                        },
                      }}
                    />
        <DarkModeToggle
        className="z-30 lg:hidden"
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}

        />
        </div>
  
        <span className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer  "
        onClick={()=>setDraweropen(!draweropen)}
         ></span>
      </div>
      </Fade>
    </>
  );
}

export default Navbar;
