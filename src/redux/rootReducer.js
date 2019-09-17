import { combineReducers } from 'redux';
import { gameReducer } from './game/gameReducer';
import { loadingReducer } from './loading/loadingReducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  loading: loadingReducer
});
