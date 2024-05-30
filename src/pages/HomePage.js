import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { addBoard, renameBoard, deleteBoard } from '../redux/actions';
import { fetchBoards } from '../services/api';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import '../styles/global.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(state => state.boards);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBoards()
      .then(boards => {
        boards.forEach(board => dispatch(addBoard(board.name)));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  const handleAddBoard = () => {
    const boardName = prompt('Enter board name:');
    if (boardName) {
      dispatch(addBoard(boardName));
    }
  };

  const handleBoardClick = (boardId) => {
    navigate('/board/' + boardId);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h4" color="error">{error}</Typography>;
  }

  return (
    <Box className="container">
      <Typography variant="h3">Boards</Typography>
      {boards.map(board => (
        <Box key={board.id} mb={2} p={2} className="board">
          <Typography variant="h4" onClick={() => handleBoardClick(board.id)}>{board.name}</Typography>
          <Button variant="outlined" color="primary" onClick={() => dispatch(renameBoard(board.id))}>Rename</Button>
          <Button variant="outlined" color="secondary" onClick={() => dispatch(deleteBoard(board.id))}>Delete</Button>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddBoard}>Add Board</Button>
    </Box>
  );
};

export default HomePage;
