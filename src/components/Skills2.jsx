import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Badge from '@mui/material/Badge';
import PageTitle from './PageTitle';
import CountUp from 'react-countup';
import { Chip } from '@mui/material';
const styles = {
  iconStyle: {
    height: 60,
    width: 60,
    margin: 10,
    marginBottom: 0,
  },
};

const Skills2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const RenderSkillsIntro = (intro) => (
    <h4 className='font-Roboto text-[18px] '>
      <ReactMarkdown children={intro} />
    </h4>
  );

  return (
    <>

      {data ? (
        <Fade>
          <div className="flex justify-center align-middle flex-grow pb-10  text-forgroundColor ">

            <div className='w-[1024px] mt-24'>
              <PageTitle > {data ? data.title : ""}</PageTitle>
              {RenderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title} className='mt-2 text-center'>

                  <div className=' mt-10 mb-[-25px]'>
                    <Chip
                      color={rows.color}
                      className='block'
                      label={<span className='font-MontserratBold text-[20px] text-center '>
                        {rows.title}
                      </span>} />
                  </div>
                  {
                    rows.items.map((item) => (
                      <div className='inline-block text-center mr-7 pt-4 mt-7'>
                        <Badge color="success"
                          badgeContent={
                            <CountUp
                              className='font-OpenSansMedium text-[15px] py-10 '
                              start={0} end={item.level} duration={5} delay={2} suffix='%' />
                          }
                          className=''>
                          <div key={item.title} className=' border-2 rounded-lg border-background_hover p-[1px]' >
                            <img
                              style={styles.iconStyle}
                              className='mr-5'
                              src={item.icon}
                              alt={item.title}
                            />
                            <span className='text-center font-OswaldRegular'>{item.title}</span>
                          </div>
                        </Badge>
                      </div>

                    ))
                  }
                </div>
              ))}
            </div>
          </div>
        </Fade >
      ) : <FallbackSpinner />}
    </>
  );
}

export default Skills2;
