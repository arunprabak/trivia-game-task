import { combineReducers } from 'redux';
import { loaderReducer } from './loader/loaderReducer';
import { notificationReducer } from './notification/notificationReducer';
import { gameReducer } from './game/gameReducer';

export const rootReducer = combineReducers({
    loader:loaderReducer,
    notification:notificationReducer,
    game:gameReducer
})
