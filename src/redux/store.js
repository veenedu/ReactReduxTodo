import reducers from './reducers/index';
import {createStore, applyMiddleware}  from 'redux';

const middlewares = []; //[m1,m2]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);
export default store;
