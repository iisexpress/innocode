import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { TodoModel } from 'app/models';

const initialState: RootState.TodoState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
];

export const todoReducer = handleActions<RootState.TodoState, TodoModel>(
  {
    
  },
  initialState
);
