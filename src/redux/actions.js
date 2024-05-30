// Board Actions
export const addBoard = (name) => ({
  type: 'ADD_BOARD',
  payload: { name }
});

export const updateBoard = (id, name) => ({
  type: 'UPDATE_BOARD',
  payload: { id, name }
});

export const deleteBoard = (id) => ({
  type: 'DELETE_BOARD',
  payload: { id }
});

// List Actions
export const addList = (boardId, name) => ({
  type: 'ADD_LIST',
  payload: { boardId, name }
});

export const updateList = (boardId, listId, name) => ({
  type: 'UPDATE_LIST',
  payload: { boardId, listId, name }
});

export const deleteList = (boardId, listId) => ({
  type: 'DELETE_LIST',
  payload: { boardId, listId }
});

// Card Actions
export const addCard = (listId, title) => ({
  type: 'ADD_CARD',
  payload: { listId, title }
});

export const updateCard = (listId, cardId, name) => ({
  type: 'UPDATE_CARD',
  payload: { listId, cardId, name }
});

export const deleteCard = (listId, cardId) => ({
  type: 'DELETE_CARD',
  payload: { listId, cardId }
});

export const moveCard = (sourceListId, destListId, cardId) => ({
  type: 'MOVE_CARD',
  payload: { sourceListId, destListId, cardId }
});