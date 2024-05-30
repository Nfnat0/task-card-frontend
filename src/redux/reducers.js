import { combineReducers } from 'redux';

const initialState = {
  boards: []
};

const boardsReducer = (state = initialState.boards, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [...state, { id: Date.now(), name: action.payload.name, lists: [] }];
    case 'RENAME_BOARD':
      return state.map(board => board.id === action.payload.id ? { ...board, name: action.payload.name } : board);
    case 'DELETE_BOARD':
      return state.filter(board => board.id !== action.payload.id);
    case 'ADD_LIST':
      return state.map(board => board.id === action.payload.boardId ? { ...board, lists: [...board.lists, { id: Date.now(), name: action.payload.name, cards: [] }] } : board);
    case 'ADD_CARD':
      return state.map(board => ({
        ...board,
        lists: board.lists.map(list => list.id === action.payload.listId ? { ...list, cards: [...list.cards, { id: Date.now(), title: action.payload.title, description: '', label: '', dueDate: null, isCompleted: false }] } : list)
      }));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  boards: boardsReducer
});

export default rootReducer;
