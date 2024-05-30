// Board Actions
export const addBoard = (name) => ({
  type: 'ADD_BOARD',
  payload: { name }
});

export const renameBoard = (id, name) => ({
  type: 'RENAME_BOARD',
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

export const renameList = (boardId, listId, name) => ({
  type: 'RENAME_LIST',
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

export const renameCard = (listId, cardId, name) => ({
  type: 'RENAME_CARD',
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

export const changeCardCompletionStatus = (listId, cardId, isCompleted) => ({
  type: 'CHANGE_CARD_COMPLETION_STATUS',
  payload: { listId, cardId, isCompleted }
});
