import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import {Fade} from 'react-reveal';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Badge from '@mui/material/Badge';
import PageTitle from './PageTitle';
import CountUp from 'react-countup';
import SocialBox from './SocialBox';
import AOS from "aos";
import { Chip } from '@mui/material';

const styles = {
  iconStyle: {
    height: 70,
    width: 70,
    margin: 10,
    marginBottom: 0,
  },
};

const Skills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,

    });
    AOS.refresh();

  }, []);
  const RenderSkillsIntro = (intro) => (
    <h4 className='font-Roboto text-[18px] px-40 md:px-10 z-40  '>
      <ReactMarkdown children={intro} />
    </h4>
  );

  return (
    <>

      {data ? (
   
          <div className="flex justify-center align-middle flex-grow min-h-screen pb-20
                        dark:text-bgColor dark:bg-white bg-bgColor text-textGrayColor ">
            <div className='w-[1024px] mt-24'>
              <PageTitle > {data ? data.title : ""}</PageTitle>
              <div className='md:hidden z-100 fixed'>
                <SocialBox />
              </div>
              {RenderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title} className='mt-2 text-center '>
                  <div className='mt-10 mb-[-20px]  '>
                    <Chip
                      color={rows.color}
                      className='block'
                      label={<span className='font-MontserratBold text-[20px] text-center '>
                        {rows.title}
                      </span>} />
                  </div>
                  {
                    rows.items.map((item) => (
                      <div className='inline-block text-center text-[18px] mr-7 pt-4 mt-7 '>
                        <Badge color="primary"
                          sx={{
                            '& .MuiBadge-badge': {
                              background: '#3fbed0',
                              color: '#1a3143',
                            },
                          }}
                          badgeContent={
                            <CountUp
                              className='font-OpenSansMedium text-[15px] py-10 '
                              start={0} end={item.level} duration={5} delay={2} suffix='%' />
                          }
                        >
                          <div key={item.title} className='bg-forgroundColor2 dark:bg-gray_font border-2 rounded-lg border-background_hover p-[1px]' >
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

      ) : <FallbackSpinner />}
    </>
  );
}

export default Skills;
