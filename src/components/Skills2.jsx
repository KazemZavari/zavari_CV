import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Badge from '@mui/material/Badge';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

function Skills2() {

  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>

      {data ? (
        <Fade>
          <div className=" flex justify-center align-middle flex-grow bg-gray_font">
            <div className='w-[1024px] mt-24'>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title} className=''>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div className='inline-block ml-16  pt-10 '>
                      <Badge color="success" badgeContent={"75%"} className=''>
                        <div key={item.title} className='mt-[-10px]' >
                          <img
                            style={styles.iconStyle}
                            className='mr-5'
                            src={item.icon}
                            alt={item.title}
                          />
                          <p>{item.title}</p>
                        </div>
                      </Badge>

                    </div>

                  ))}
                </div>
              ))}
            </div>
          </div>
        </Fade>
      ) : <FallbackSpinner />}
    </>
  );
}

export default Skills2;
