import React from 'react';
import Card from './Card';
import { Button, Box, Typography } from '@mui/material';

const List = ({ list, addCard }) => {
  const handleAddCard = () => {
    const cardTitle = prompt('Enter card title:');
    if (cardTitle) {
      addCard(list.id, cardTitle);
    }
  };

  return (
    <Box className="list">
      <Typography variant="h5">{list.name}</Typography>
      <Box>
        {list.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleAddCard}>Add Card</Button>
    </Box>
  );
};

export default List;
