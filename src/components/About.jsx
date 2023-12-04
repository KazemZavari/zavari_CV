import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

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
      <div className="section-content-container bg-background_2">
        <div className='w-[1024px] mt-24'>
          <h4 className='my-5 flex justify-center'>{data? data.title : ""}</h4>
          {data
            ? (
              <Fade>
                <div className='grid grid-cols-2 '>

                  <div style={styles.introTextContainer}
                    className=' col-span-1 justify-center'>
                    {parseIntro(data.about)}
                  </div>
                  <div style={styles.introImageContainer}
                    className='col-span-1 ' >
                    <img className='rounded-[40%]'
                      src={data?.imageSource}
                      alt="profile" />
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
