import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import SocialBox from './SocialBox';
import PageTitle from './PageTitle';

const styles = {
  introTextContainer: {
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    textAlign: 'justify',
    fontSize: '1.2em',
    letterSpacing: '-0.01em',
    wordSpacing: '-3px',
    textIndent: '15px',
  },
};

const About = () => {
  const [data, setData] = useState(null)
    ;
  const parseIntro = (text) => (
    <ReactMarkdown children={text} />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>

      <div className="flex justify-center flex-grow bg-bgColor dark:text-bgColor min-h-screen
                     dark:bg-white h-screen pb-10 text-textGrayColor overflow-y-auto 
                     duration-1000  ">
        <SocialBox />
        <div className='w-[1024px] mt-24 lg:px-20 md:px-16 '>
          <PageTitle >{data ? data.title : ""}</PageTitle>
          {data
            ? (
              <Fade>
                <div className='grid grid-cols-3 lg:overflow-auto min-h-screen'>

                  <div style={styles.introTextContainer}
                    className=' col-span-2 lg:col-span-3 font-OpenSansSemiBold pl-2  '>
                    {parseIntro(data.about)}
                    <Link to="mailto:zavari.dev24@gmail.com"
                      className="inline-block text-Orange group font-PlayfairDisplaySemiBold
                             text-[19px] md:text-[16px] pt-4 leading-2 tracking-wide ">
                      Let's   Connect   Me{" "}
                      <i className="fa-solid fa-arrow-right text-lg p-[2px] group-hover:text-white
                      dark:group-hover:text-black "></i>{" "}
                    </Link>
                  </div>

                  <div
                    className='col-span-1 mt-2 flex justify-center lg:hidden' >
                    <Avatar
                      src={data?.imageSource}
                      className='border-2 border-Orange rotate-[10deg] hover:rotate-[0deg] duration-500 origin-bottom-right '
                      variant="rounded"
                      sx={{
                        height: 280,
                        width: 280,
                        margin: "0 auto",
                        display: {
                          xl: "block",
                          lg: "block",
                          md: "block",
                          sm: "none",
                          xs: "none",
                        },
                      }}
                    />
                  </div>
                </div>
              </Fade>
            )
            : <FallbackSpinner />}
        </div>
      </div>
    </>
  );
}

export default About;
