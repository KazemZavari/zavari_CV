import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import endpoints from '../constants/endpoints';
import PortfolioCard from './PortfolioCard';
import PageTitle from './PageTitle';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Portfolio = () => {

  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.portfolio, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const numberOfItems = showMore && data ? data.length : 6;
  return (
    <>
      <div className="flex justify-center flex-grow bg-bgColor pb-8 text-textGrayColor
                      min-h-screen sm:h-auto md:h-auto lg:h-auto ">
        <div className='w-[1024px] mt-24 '>
          <PageTitle>{data ? data.title : ""}</PageTitle>
          {data
            ? (
              <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:px-10 mt-5 gap-5 lg:gap-2 '>
                {data.portfolio?.slice(0, numberOfItems).map((portfolio) => (
                  <Fade key={portfolio.title} >
                    <div className='col-span-1 mt-1 sm:flex justify-center relative img-box '>
                      <PortfolioCard portfolio={portfolio} />
                    </div>
                  </Fade>

                ))}

                {/* {!showMore
                  && (
                    <Button
                      style={styles.showMoreStyle}
                      // variant={theme.bsSecondaryVariant}
                      onClick={() => setShowMore(true)}
                    >
                      
                    </Button>
                  )} */}

              </div>



            ) : <FallbackSpinner />}
        </div>
      </div>
    </>
  );
};


export default Portfolio;