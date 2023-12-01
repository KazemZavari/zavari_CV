import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import SocialNetworks from "../components/SocialNetworks"
import Contact from "../components/Contact"
import bg2 from "../assets/images/18.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg2})` }}
        className="bg-cover bg-no-repeat h-screen flex overflow-y-hidden "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 
                        lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white p-4 rounded-2xl
                                 bg-[linear-gradient(90deg,#b004b0,#38097a)] ">
                Welcome to my CV
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">Hi! I'm Kazem Zavari</h1>
            <p className="text-white py-4 max-w-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui
              impedit sunt, est molestiae ullam. Saepe voluptatum ducimus
              adipisci pariatur. adipisicing elit. In qui impedit ipsum dolor
              sit amet consectetur
            </p>
            <AnchorLink href="#contactForm" offset='95'
              className="text-white hover:text-Orange font-MontserratBold  text-[28px]">
              Let's Connect{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </AnchorLink>
            <SocialNetworks />
          </div>
          {/* <div className="image banner-astronout lg:hidden absolute w-[100px] flex ">
            <img className="w-80 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[100px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div> */}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Header;
