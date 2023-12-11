import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; import "../styles.css";
import img from "../assets/images/contact-img.svg";
import img2 from "../assets/images/b2.jpg";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      // offset: 100,
      duration: 1200,
      // easing: 'ease-in-sine',
      // delay: 500,
    });
    AOS.refresh();

  }, []);
  return (
    <>
      <div id="contactForm" className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        {/* bg-[linear-gradient(90deg,#b004b0,#38097a);] */}
        {/* bg-[linear-gradient(90deg,#22353e,#132a35);] */}
        <div className="wrapper flex justify-center py-28 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[500px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Get In Touch</h1>
            <form action="" className="flex flex-col text-[#222]">
              <div className="flex gap-4 py-2  ">
                <input
                  className="  h-14  rounded-lg border-[1px] pl-4 lg:w-36 "
                  type="text"
                  placeholder="Name"
                />
                <input
                  className=" h-14 rounded-lg  border-[1px] pl-4 lg:w-36"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex gap-4 py-4  ">
                <input
                  className=" h-14 rounded-lg border-[1px] pl-4  lg:w-36"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className=" h-14  rounded-lg  border-[1px] pl-4 lg:w-36"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className=" rounded-2xl border-[1px] h-44 pl-4 w-full pt-2"
                rows={40}
                cols={35}
                placeholder="Message"
              />
              <button className="bg-[#999] border-black border-[1] py-[16px] px-8 my-8 
                                w-32 font-bold ">
                Send
              </button>
              
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
