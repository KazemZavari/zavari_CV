import React from "react";
import { menuItems } from "../constants/menuItems"
import { NavLink } from "react-router-dom";
import Switcher from "../theme/Switcher";

const NavMenu = ({ draweropen, setDraweropen }) => {
  return (
    <>
      <div className=" absolute mx-5 mt-5 lg:mr-12 md:mr-8 right-0 hidden lg:block  "
      // onClick={(e) => setDraweropen(!draweropen)}
      >
        <Switcher setDraweropen={setDraweropen} draweropen={draweropen} />
      </div>
      <div component="nav ">
        <ul className="flex lg:inline-block lg:mt-2 lg:text-center ">
          {menuItems.map((item, index) => (
            <li key={index} className="mr-1 md:mr-0 px-[5px] lg:my-1 ">
              <NavLink className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link  "}
                onClick={(e) => setDraweropen(!draweropen)}
                to={item.link}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
