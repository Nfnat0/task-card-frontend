import React from 'react';
import List from './List';
import { Button, Box, Typography } from '@mui/material';

const Board = ({ board, addList, renameBoard, deleteBoard }) => {
  const handleAddList = () => {
    const listName = prompt('Enter list name:');
    if (listName) {
      addList(board.id, listName);
    }
  };

  const handleRenameBoard = () => {
    const boardName = prompt('Enter new board name:');
    if (boardName) {
      renameBoard(board.id, boardName);
    }
  };

  return (
    <Box className="board">
      <Typography variant="h4" onClick={handleRenameBoard}>{board.name}</Typography>
      <Button variant="outlined" color="primary" onClick={handleRenameBoard}>Rename Board</Button>
      <Button variant="outlined" color="secondary" onClick={() => deleteBoard(board.id)}>Delete Board</Button>
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
