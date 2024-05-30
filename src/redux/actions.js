export const ADD_BOARD = 'ADD_BOARD';
export const RENAME_BOARD = 'RENAME_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';

export const addBoard = (name) => ({
  type: ADD_BOARD,
  payload: { name }
});

export const renameBoard = (id, name) => ({
  type: RENAME_BOARD,
  payload: { id, name }
});

export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  payload: { id }
});

export const addList = (boardId, name) => ({
  type: ADD_LIST,
  payload: { boardId, name }
});

export const addCard = (listId, title) => ({
  type: ADD_CARD,
  payload: { listId, title }
});
