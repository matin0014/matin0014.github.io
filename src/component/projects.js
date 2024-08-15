import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import image from './images/Untitled.jpg';
import llama from './images/Llama3-1.jpg';
import paper from './images/PaperTrade.jpg';

const cardData = [
  {
    image: paper,
    status: 'Paper Trading App',
  },
  {
    image: llama,
    status: 'Fine Tuning Llama 3.1',
  },
  {
    image: image,
    status: 'In progress',
  },
  {
    image: image,
    status: 'In progress',
  }
];

const ActionAreaCard = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  let cardWidth;
  if (isSmallScreen) {
    cardWidth = '100%';
  } else if (isMediumScreen) {
    cardWidth = '45%';
  } else {
    cardWidth = '22%';
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      maxWidth: '1200px',
      padding: '0 20px',
      boxSizing: 'border-box',
      marginTop: '300px',
    }}>
      <Typography
        variant="h1"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'flex-start',
          textAlign: 'left',
          fontSize: 'clamp(2.5rem, 9vw, 3rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        My&nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: 'clamp(2rem, 9vw, 3rem)',
            color: 'hotpink',
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Projects
        </Typography>
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
        {cardData.map((card, index) => (
          <div key={index} style={{ width: cardWidth, margin: '10px 0', textAlign: 'center' }}>
            <Typography 
              variant="body1" 
              component="p" 
              sx={{ 
                color: 'lightgray', 
                marginBottom: '10px', 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              {card.status}
            </Typography>
            <Card sx={{ height: 'auto', borderRadius: '30px', backgroundColor: 'black' }}>
              <CardActionArea sx={{ borderRadius: '30px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  sx={{
                    borderRadius: '30px',
                    backgroundColor: 'black', // Ensures no white outline
                    margin: 0, // Removes any default margin
                    padding: 0, // Removes any default padding
                    border: '5px solid black', // Matches the card's border to the background
                  }}
                />
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionAreaCard;
