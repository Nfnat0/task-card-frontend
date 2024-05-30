import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Card = ({ card }) => {
  return (
    <Box className="card">
      <Typography variant="h6">{card.title}</Typography>
      <Typography variant="body2">{card.description}</Typography>
      <Button variant="outlined">Edit</Button>
    </Box>
  );
};

export default Card;
