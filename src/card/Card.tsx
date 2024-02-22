import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CardProps {
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ title, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
        <IconButton size="small" aria-label="heart">
      <FavoriteIcon fontSize="small" />
    </IconButton>
        </Typography>
        <Typography variant="body2" component="p" style={{ textAlign: 'center' }}>
          {description}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Typography variant="body2" component="button">
            {title}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cards;
