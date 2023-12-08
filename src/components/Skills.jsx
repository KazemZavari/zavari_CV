import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; import "../styles.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
    });
    AOS.refresh();

  }, []);
  return (
    <>
      <div id="skills" style={{ backgroundImage: `url(${bg})` }}
        className="wrapper bg-no-repeat bg-center bg-cover   ">
        <div 
        data-aos="fade-up" 
          className="skills-wrapper text-center text-white bg-mainBackground 
                    rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="box  py-20 justify-between rounded-xl items-center  my-6">
            <Swiper
              slidesPerView={10}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="ml-5 bg-Forground">
                {" "}
                <div className="  my-1 bg-Forground ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Web Dev</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className="  bg-Forground ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Frontend </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-Forground ">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">React.js</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Javascript</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
