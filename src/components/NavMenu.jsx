
import { menuItems } from "../constants/menuItems"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { useTheme } from "@emotion/react";

const NavMenu = () => {
  //   const theme = useTheme();
  return (
    <>

      <div component="nav" className="main-menu  ">
        {/* border-bottom: 3px solid transparent; */}
        <ul className="flex ">
          {menuItems.map((item, index) => (
            <li key={index} className="mr-1 px-[8px] xl:px-[10px] ">
              <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"}

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
