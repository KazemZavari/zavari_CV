import React from 'react';
// import { Card, Badge } from 'react-bootstrap';
import { Card, CardActions, CardContent, Button, Badge, Divider } from '@mui/material';
import { Link } from 'react-router-dom';


const PortfolioCard = (props) => {

  const { portfolio } = props;
  return (

    <Card sx={{ maxWidth: 345 }}
      className='bg-forgroundColor sm:mt-2 group border-2 border-Orange 
      ' >
      <img src={portfolio?.image} 
      className='max-h-[175px] w-full group-hover:scale-[1.12] duration-1000 opacity-90
                 group-hover:opacity-100' />
      <CardContent
        className='bg-forgroundColor '>
        <h2 className='text-center text-white  font-OpenSansSemiBold text-[20px] pb-10 '>
          {portfolio.title}
        </h2>
        <Divider textAlign="right"
          sx={{
            color: "#222",
            '& .MuiDivider-root': {

            }
          }}
          className='   '
        >
        
        </Divider>
        {portfolio.tags && (
          <div>
            {portfolio.tags.map((tag) => (
              <Badge key={tag} className='text-[14px] mr-1 mt-3 bg-Cyan rounded-[9px] px-[6px] 
                                          font-Roboto '>
                {tag}
              </Badge>
            ))}
          </div>

        )}
      </CardContent>


      <CardActions
        className='bg-forgroundColor2  text-white  text-[16px] lg:text-[15px] font-Roboto'>
        <Link to={portfolio.links.viewPage}
          className='bg-background_hover mx-3 lg:mx-0 mb-2 px-3 lg:px-1 py-1 rounded-lg hover:bg-background_2 
                     hover:text-Orange_2' >
          viewPage
        </Link>
        <Link to={portfolio.links.viewSource}
          className='bg-background_hover mx-3 lg:mx-0 mb-2 px-3 lg:px-1 py-1 rounded-lg hover:bg-background_2
          hover:text-Orange_2  ' >
          viewSource
        </Link>
      </CardActions>
    </Card>

  );
};


export default PortfolioCard;
