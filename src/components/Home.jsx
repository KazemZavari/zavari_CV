import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import endpoints from "../constants/endpoints";
import Social from "./Social"
import Fade from "react-reveal";
import Typewriter from 'typewriter-effect';
import "../styles.css";

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
          className="bg-laptap lg:bg-tablet sm:bg-mobile bg-cover bg-center bg-no-repeat
          h-screen flex justify-center transition-transform md:overflow-auto"
        >
          <div className="flex mt-36 md:mt-32 lg:mt-36 justify-center text-center   
                        lg:justify-center lg:px-6">
            <div className="sm:mt-20">

              <h1 className="text-gray_font lg:text-semiGray_font text-[30px] md:text-[22px] 
                              font-PlayfairDisplaySemiBold ">
                Hi! I'm Kazem Zavari
              </h1>
              <div className="flex flex-row justify-center align-middle text-[30px] text-Orange 
                               font-PlayfairDisplaySemiBold my-4 py-2 lg:py-1 lg:my-2 md:text-[20px]
                               sm:py-8 ">
                <h2 className="inline-block  text-[30px] md:text-[21px] text-Orange
                               font-PlayfairDisplayRegular">
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
              <div className="mt-20 mb-3 lg:mt-8 md:mt-20 sm:mt-[75px] ">
                <Link to="mailto:zavari.dev24@gmail.com" offset='95'
                  className="text-white hover:text-Orange font-MontserratBold text-[28px]
                            md:text-[20px]">
                  Let's Connect{" "}
                  <i className="fa-solid fa-arrow-right text-lg p-[2px] "></i>{" "}
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
