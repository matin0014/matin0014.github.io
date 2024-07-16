import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from './images/9804423.jpg';
const cardData = [
  {
    title: 'Lizard 1',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    title: 'Lizard 2',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    title: 'Lizard 3',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    title: 'Lizard 4',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  }
];

const ActionAreaCard = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '1200px', /* Adjust max width as needed */
      padding: '0 20px', /* Adjust padding for margin on left and right */
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', width: '100%' }}>
        {cardData.map((card, index) => (
          <Card key={index} sx={{ width: 200, margin: '10px', height: 150 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image= {image}
              />
              <CardContent>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActionAreaCard;