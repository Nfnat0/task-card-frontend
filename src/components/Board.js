import React from 'react';
import List from './List';
import { Button, Box, Typography } from '@mui/material';

const Board = ({ board, addList, updateBoard }) => {
  const handleAddList = () => {
    const listName = prompt('Enter list name:');
    if (listName) {
      addList(board.id, listName);
    }
  };

  const handleUpdateBoard = () => {
    const boardName = prompt('Enter new board name:');
    if (boardName) {
      updateBoard(board.id, boardName);
    }
  };

  return (
    <Box className="board">
      <Typography variant="h4" onClick={handleUpdateBoard}>{board.name}</Typography>
      <Box>
        {board.lists.map(list => (
          <List key={list.id} list={list} />
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleAddList}>Add List</Button>
    </Box>
  );
};

export default Board;
