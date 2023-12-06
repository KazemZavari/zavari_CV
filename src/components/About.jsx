import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
const styles = {
  introTextContainer: {
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    textAlign:'justify',
    fontSize: '1.2em',
  },
};

const About = () => {
  const [data, setData] = useState(null);
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

      <div className="flex justify-center flex-grow ">
        <div className='w-[1024px] mt-24 lg:px-16  '>
          <h4 className='flex justify-center my-4 font-OswaldBold text-[28px] 
                          '>
            {data ? data.title : ""}
            
          </h4>
          {data
            ? (
              <Fade>
                <div className='grid grid-cols-3 '>
               
                  <div style={styles.introTextContainer}
                    className=' col-span-2 lg:col-span-3 font-OpenSansSemiBold xl:pl-5 '>
                    {parseIntro(data.about)}
                    <Link to="/contact" 
                  className="inline-block hover:text-Orange font-PlayfairDisplaySemiBold
                             text-[19px] md:text-[16px] pt-2">
                  Let's Connect Me{" "}
                  <i className="fa-solid fa-arrow-right text-lg p-[2px] "></i>{" "}
                </Link>
                  </div>

                  <div
                    className='col-span-1 mt-2 flex justify-center lg:hidden' >
                    <Avatar
                      src={data?.imageSource}
                      className='border-4 border-Orange'
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
