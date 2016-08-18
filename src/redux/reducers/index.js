import {TaskReducer} from './task-reducer';
import {combineReducers} from 'redux';

const rootReducer  = combineReducers({
  tasks: TaskReducer
});


export default  rootReducer;
