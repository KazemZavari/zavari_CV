import { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import Social from "./Social"
import Fade from "react-reveal";
import bg3 from "../assets/images/bg33.jpg";
import bg7 from "../assets/images/img11.jpg";
import bg8 from "../assets/images/bg66.jpg"
import bg9 from "../assets/images/bg44.jpg"
import bg1 from "../assets/images/bg21.jpg"
import "../styles.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);


  return (
    <>
      <Fade>
        <div
          id="home"
          style={{ backgroundImage: `url(${bg7})`, }}
          className="bg-cover bg-center bg-no-repeat h-screen flex justify-center  "
        >
          <div className="flex mt-36 md:mt-32 lg:mt-24 justify-center text-center   
                        lg:justify-center lg:px-6">
            <div className="">

              <h1 className="text-gray_font text-[30px] md:text-[22px] font-PlayfairDisplaySemiBold ">
                Hi! I'm Kazem Zavari
              </h1>
              <div className="flex flex-row justify-center align-middle text-[30px] text-Orange 
                               font-PlayfairDisplaySemiBold my-4 py-2 lg:py-1 lg:my-2 md:text-[21px]
                               sm:py-8 ">
                <h2 className="inline-block  text-[30px] md:text-[21px] text-Orange
                               font-PlayfairDisplaySemiBold">
                  I&apos;m&nbsp;
                </h2>
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: data?.roles,
                  }}
                />
              </div>
              <div className="mt-20 mb-3 lg:mt-6 sm:mt-7 ">
                <Link to="/contact" offset='95'
                  className="text-white hover:text-Orange font-MontserratBold text-[28px]
                            md:text-[20px]">
                  Let's Connect{" "}
                  <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
                </Link>
              </div>

              
            </div>
            <Social />
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Home;
