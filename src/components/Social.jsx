
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import endpoints from '../constants/endpoints';

const Social = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(endpoints.social, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => err);
    }, []);
  
    return (
      <div className=" fixed mt-64 lg:mt-[183px] md:mt-52 sm:mt-80 bg-Green p-3 
             lg:py-2 rounded-[10px] ">
        {data ? data.social.map((social) => (
          <SocialIcon
            key={social.network}
            className="opacity-80 hover:opacity-100 hover:scale-[0.9] mr-[7px] duration-500 "
            url={social.href}
            network={social.network}
            target="_blank"
          />
        )) : null}
      </div>
    );


    // return (
    //     <div className="text-lg flex justify-center gap-4  lg:gap-8 mt-1 lg:my-1">
    //         <a href="https://twitter.com/reayhs" target="_blank">
    //             <i className="fa-brands fa-telegram border-[2px] border-white p-2 rounded-[100%]
    //                 hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
    //         </a>

    //         <a href="https://www.instagram.com/iburakz/" target="_blank">
    //             <i className="fa-brands fa-whatsapp border-[2px] border-white p-2 rounded-[100%]
    //             hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
    //         </a>
    //         <a
    //             href="https://github.com/Reayhs/react-tailwind-portfolio"
    //             target="_blank"
    //         >
    //             <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%]
    //          hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange">
    //             </i>
    //         </a>
    //         <a href="https://twitter.com/reayhs" target="_blank">
    //             <i className="fa-brands fa-linkedin border-[2px] border-white p-2 rounded-[100%]
    //                 hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
    //         </a>
    //     </div>
    // )
}

export default Social;