import { menuItems } from "../constants/menuItems"
import { NavLink } from "react-router-dom";
// import { useTheme } from "@emotion/react";

const NavMenu = ({ draweropen, setDraweropen }) => {
  //   const theme = useTheme();
  return (
    <>

      <div component="nav">
        {/* border-bottom: 3px solid transparent; */}
        <ul className="flex lg:inline-block lg:mt-5 lg:text-center ">
          {menuItems.map((item, index) => (
            <li key={index} className="mr-1 md:mr-0 xl:px-[10px] lg:my-3 ">
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
