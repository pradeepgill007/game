import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import Game from './game';

const reducers = combineReducers({
  game: Game,
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
