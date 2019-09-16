import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const middlewares = [thunk];
middlewares.push(logger);

if(process.env.NODE_ENV === 'developement') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 
