import { menuItems } from "../constants/menuItems"
import { NavLink } from "react-router-dom";
import Switcher from "../theme/Switcher";
// import { useTheme } from "@emotion/react";

const NavMenu = ({ draweropen, setDraweropen }) => {
  //   const theme = useTheme();
  return (
    <>
    <div className=" absolute mx-5 mt-5 lg:mr-10 md:mr-5 right-0 hidden lg:block "
    onClick={(e) => setDraweropen(!draweropen)}> 
    <Switcher setDraweropen={setDraweropen} draweropen={draweropen} />
    </div>
 
        <div component="nav ">
      
          <ul className="flex lg:inline-block lg:mt-5 lg:text-center ">
            {menuItems.map((item, index) => (
              <li key={index} className="mr-1 md:mr-0 px-[10px] lg:my-3 ">
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
