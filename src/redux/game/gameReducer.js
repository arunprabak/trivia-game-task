import { GameTypes } from './gameTypes';

const INITIAL_STATE = {
  gameData: [],
  score: {
    correct: 0,
    wrong: 0
  }
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
    default:
      return state;
  }
};
