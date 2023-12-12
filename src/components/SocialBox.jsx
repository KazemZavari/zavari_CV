
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import endpoints from '../constants/endpoints';

const SocialBox = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.socialBox, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="z-100 w-[60px] align-middle py-1 fixed left-0 top-[50%] bg-Green
                   hover:bg-Yellow duration-1000 text-center ">
      {data ? data.socialBox.map((social) => (
        <SocialIcon
      
          key={social.network}
          className="opacity-80 hover:opacity-100 hover:scale-[0.9] mt-1 duration-500 w-5 h-5 "
          url={social.href}
          network={social.network}
          target="_blank"
        />
      )) : null}
    </div>
  );
}

export default SocialBox;