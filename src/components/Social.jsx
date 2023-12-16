
import React,{ useEffect, useState } from 'react';
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
    <div className=" fixed mt-64 lg:mt-[143px] md:mt-52 sm:mt-80 bg-Green p-3 
             lg:py-2 rounded-[10px] animate__fadeInUpBig duration-[2s]">
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
}

export default Social;