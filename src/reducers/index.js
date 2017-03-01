import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';



const allReducers = combineReducers({
  todos: TodoReducer
});

export default allReducers;
