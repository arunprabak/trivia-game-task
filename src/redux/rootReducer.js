import { combineReducers } from 'redux';
import { gameReducer } from './game/gameReducer';

export const rootReducer = combineReducers({
  game: gameReducer
});
