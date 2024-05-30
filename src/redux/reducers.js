import { combineReducers } from 'redux';

const initialState = {
  boards: []
};

const boardsReducer = (state = initialState.boards, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state, 
        { id: Date.now(), name: action.payload.name, lists: [] }
      ];
    case 'RENAME_BOARD':
      return state.map(board =>
        board.id === action.payload.id 
          ? { ...board, name: action.payload.name } 
          : board
      );
    case 'DELETE_BOARD':
      return state.filter(board => board.id !== action.payload.id);
    case 'ADD_LIST':
      return state.map(board =>
        board.id === action.payload.boardId 
          ? { ...board, lists: [...board.lists, { id: Date.now(), name: action.payload.name, cards: [] }] } 
          : board
      );
    case 'RENAME_LIST':
      return state.map(board =>
        board.id === action.payload.boardId 
          ? {
            ...board,
            lists: board.lists.map(list =>
              list.id === action.payload.listId 
                ? { ...list, name: action.payload.name } 
                : list
            )
          }
          : board
      );
    case 'DELETE_LIST':
      return state.map(board =>
        board.id === action.payload.boardId 
          ? { ...board, lists: board.lists.filter(list => list.id !== action.payload.listId) } 
          : board
      );
    case 'ADD_CARD':
      return state.map(board => ({
        ...board,
        lists: board.lists.map(list =>
          list.id === action.payload.listId 
            ? { ...list, cards: [...list.cards, { id: Date.now(), title: action.payload.title, description: '', label: '', dueDate: null, isCompleted: false }] } 
            : list
        )
      }));
    case 'RENAME_CARD':
      return state.map(board => ({
        ...board,
        lists: board.lists.map(list =>
          list.id === action.payload.listId 
            ? {
              ...list,
              cards: list.cards.map(card =>
                card.id === action.payload.cardId 
                  ? { ...card, title: action.payload.name } 
                  : card
              )
            } 
            : list
        )
      }));
    case 'DELETE_CARD':
      return state.map(board => ({
        ...board,
        lists: board.lists.map(list =>
          list.id === action.payload.listId 
            ? { ...list, cards: list.cards.filter(card => card.id !== action.payload.cardId) } 
            : list
        )
      }));
    case 'MOVE_CARD':
      const { sourceListId, destListId, cardId } = action.payload;
      let cardToMove = null;
      const updatedBoards = state.map(board => ({
        ...board,
        lists: board.lists.map(list => {
          if (list.id === sourceListId) {
            cardToMove = list.cards.find(card => card.id === cardId);
            return { ...list, cards: list.cards.filter(card => card.id !== cardId) };
          }
          if (list.id === destListId) {
            return { ...list, cards: [...list.cards, cardToMove] };
          }
          return list;
        })
      }));
      return updatedBoards;
    case 'CHANGE_CARD_COMPLETION_STATUS':
      return state.map(board => ({
        ...board,
        lists: board.lists.map(list =>
          list.id === action.payload.listId 
            ? {
              ...list,
              cards: list.cards.map(card =>
                card.id === action.payload.cardId 
                  ? { ...card, isCompleted: action.payload.isCompleted } 
                  : card
              )
            } 
            : list
        )
      }));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  boards: boardsReducer
});

export default rootReducer;
