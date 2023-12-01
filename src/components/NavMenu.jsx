
import {menuItems} from "../constants/menuItems"
import { Link } from "react-router-dom";
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
                <Link  className="navbar__link "
                
                to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
 
    </>
  );
};

export default NavMenu;
