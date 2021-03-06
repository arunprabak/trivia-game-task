import { GameTypes } from './gameTypes';

const INITIAL_STATE = {
  gameData: [],
  score: {
    correct: 0,
    wrong: 0
  },
  modalStatus: false
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameTypes.GET_GAME_DATA:
      return {
        ...state,
        gameData: action.payload
      };
    case GameTypes.CHANGE_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case GameTypes.OPEN_MODAL:
      return {
        ...state,
        modalStatus: true
      };
    case GameTypes.CLOSE_MODAL:
      return {
        ...state,
        modalStatus: false
      };
    case GameTypes.RESET_GAME_DATA:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};
