import React from 'react';
import Card from './Card';
import { Button, Box, Typography } from '@mui/material';
import { updateList } from '../services/api.mock';

const List = ({ board, list, addCard }) => {
  const handleAddCard = () => {
    const cardTitle = prompt('Enter card title:');
    if (cardTitle) {
      addCard(list.id, cardTitle);
    }
  };

  const handleUpdateList = () => {
    const listName = prompt('Enter new List name:');
    if (listName) {
      updateList(board.id, list.id, listName);
    }
  };

  return (
    <Box className="list">
      <Typography variant="h5" onClick={handleUpdateList}>{list.name}</Typography>
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
