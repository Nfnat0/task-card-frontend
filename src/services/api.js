let api;

if (process.env.REACT_APP_API_ENV === 'mock') {
  api = require('./api.mock');
} else {
  api = require('./api.real');
}

export const fetchBoards = api.fetchBoards;
export const addBoard = api.addBoard;
export const updateBoard = api.updateBoard;
export const deleteBoard = api.deleteBoard;
export const addList = api.addList;
export const updateList = api.updateList;
export const deleteList = api.deleteList;
export const addCard = api.addCard;
export const updateCard = api.updateCard;
export const deleteCard = api.deleteCard;
export const moveCard = api.moveCard;