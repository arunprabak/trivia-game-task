import { GameTypes } from './gameTypes';

const INITIAL_STATE = {
    gameData: []
}

export const gameReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
      case GameTypes.GET_GAME_DATA :
          return {
              ...state, gameData:action.payload
          };
      default: 
          return state;  
    }
};
