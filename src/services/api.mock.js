let mockData = {
  boards: [
    {
      id: 1,
      name: "Board 1",
      lists: [
        {
          id: 1,
          name: "List 1",
          cards: [
            {
              id: 1,
              title: "Card 1",
              description: "Description 1",
              label: "",
              dueDate: null,
              isCompleted: false,
            },
          ],
        },
      ],
    },
  ],
};

const findBoardById = (boardId) =>
  mockData.boards.find((board) => board.id === boardId);
const findListById = (board, listId) =>
  board.lists.find((list) => list.id === listId);
const findCardById = (list, cardId) =>
  list.cards.find((card) => card.id === cardId);

export const fetchBoards = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.boards), 500);
  });
};

export const addBoard = (name) => {
  return new Promise((resolve) => {
    const newBoard = { id: Date.now(), name, lists: [] };
    mockData.boards.push(newBoard);
    setTimeout(() => resolve(newBoard), 500);
  });
};

export const renameBoard = (boardId, name) => {
  return new Promise((resolve, reject) => {
    const board = findBoardById(boardId);
    if (board) {
      board.name = name;
      setTimeout(() => resolve(board), 500);
    } else {
      reject("Board not found");
    }
  });
};

export const deleteBoard = (boardId) => {
  return new Promise((resolve, reject) => {
    const boardIndex = mockData.boards.findIndex(
      (board) => board.id === boardId
    );
    if (boardIndex !== -1) {
      const deletedBoard = mockData.boards.splice(boardIndex, 1);
      setTimeout(() => resolve(deletedBoard), 500);
    } else {
      reject("Board not found");
    }
  });
};

export const addList = (boardId, name) => {
  return new Promise((resolve, reject) => {
    const board = findBoardById(boardId);
    if (board) {
      const newList = { id: Date.now(), name, cards: [] };
      board.lists.push(newList);
      setTimeout(() => resolve(newList), 500);
    } else {
      reject("Board not found");
    }
  });
};

export const addCard = (listId, title) => {
  return new Promise((resolve, reject) => {
    let listFound = false;
    mockData.boards.forEach((board) => {
      const list = findListById(board, listId);
      if (list) {
        const newCard = {
          id: Date.now(),
          title,
          description: "",
          label: "",
          dueDate: null,
          isCompleted: false,
        };
        list.cards.push(newCard);
        listFound = true;
        setTimeout(() => resolve(newCard), 500);
      }
    });
    if (!listFound) {
      reject("List not found");
    }
  });
};

export const updateCard = (cardId, updates) => {
  return new Promise((resolve, reject) => {
    let cardFound = false;
    mockData.boards.forEach((board) => {
      board.lists.forEach((list) => {
        const card = findCardById(list, cardId);
        if (card) {
          Object.assign(card, updates);
          cardFound = true;
          setTimeout(() => resolve(card), 500);
        }
      });
    });
    if (!cardFound) {
      reject("Card not found");
    }
  });
};

export const deleteCard = (cardId) => {
  return new Promise((resolve, reject) => {
    let cardFound = false;
    mockData.boards.forEach((board) => {
      board.lists.forEach((list) => {
        const cardIndex = list.cards.findIndex((card) => card.id === cardId);
        if (cardIndex !== -1) {
          const deletedCard = list.cards.splice(cardIndex, 1);
          cardFound = true;
          setTimeout(() => resolve(deletedCard), 500);
        }
      });
    });
    if (!cardFound) {
      reject("Card not found");
    }
  });
};

export const moveCard = (cardId, targetListId) => {
  return new Promise((resolve, reject) => {
    let cardToMove;
    let sourceList;
    let targetList;

    mockData.boards.forEach((board) => {
      board.lists.forEach((list) => {
        if (!cardToMove) {
          cardToMove = findCardById(list, cardId);
          if (cardToMove) {
            sourceList = list;
          }
        }
        if (list.id === targetListId) {
          targetList = list;
        }
      });
    });

    if (cardToMove && sourceList && targetList) {
      const cardIndex = sourceList.cards.findIndex(
        (card) => card.id === cardId
      );
      if (cardIndex !== -1) {
        const [card] = sourceList.cards.splice(cardIndex, 1);
        targetList.cards.push(card);
        setTimeout(() => resolve(card), 500);
      } else {
        reject("Card not found in source list");
      }
    } else {
      reject("Invalid source or target list");
    }
  });
};
