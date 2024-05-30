import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addList, renameBoard, deleteBoard, addBoard } from '../redux/actions';
import { fetchBoards } from '../services/api';
import Board from '../components/Board';
import { Box, Typography, CircularProgress } from '@mui/material';
import '../styles/global.css';

const BoardPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (boards.length === 0) {
      fetchBoards()
        .then(boards => {
          boards.forEach(board => dispatch(addBoard(board.name)));
          setBoard(boards.find(b => b.id === Number(boardId)));
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setBoard(boards.find(b => b.id === Number(boardId)));
      setLoading(false);
    }
  }, [boards, boardId, dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h4" color="error">{error}</Typography>;
  }

  if (!board) {
    return <Typography variant="h4">Board not found</Typography>;
  }

  return (
    <Box className="container">
      <Typography variant="h3">{board.name}</Typography>
      <Board
        board={board}
        addList={(boardId, name) => dispatch(addList(boardId, name))}
        renameBoard={(id, name) => dispatch(renameBoard(id, name))}
        deleteBoard={id => dispatch(deleteBoard(id))}
      />
    </Box>
  );
};

export default BoardPage;
