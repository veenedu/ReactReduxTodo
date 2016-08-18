import {ADD_TASK,FETCH_TASK} from '../actions/task-actions';

let defaultTasks= [];

export function TaskReducer(state=defaultTasks, action){
  if(action.type === FETCH_TASK){
    return state;
  }

  if(action.type === ADD_TASK){
    return state.concat(action.payload);
  }

  return state;
}
