let api;

if (process.env.REACT_APP_API_ENV === 'mock') {
  api = require('./api.mock');
} else {
  api = require('./api.real');
}

export const fetchBoards = api.fetchBoards;
export const addBoard = api.addBoard;
export const renameBoard = api.renameBoard;
export const deleteBoard = api.deleteBoard;
export const addList = api.addList;
export const addCard = api.addCard;
export const updateCard = api.updateCard;
export const deleteCard = api.deleteCard;
export const moveCard = api.moveCard;
