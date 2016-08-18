export const ADD_TASK = 'add_task';
export const FETCH_TASK = 'fetch_task';

export function addTask(task){
  return {
    payload: task,
    type:ADD_TASK
  }
}

export function fetchTasks(){
  return {
    type: FETCH_TASK
  }
}
