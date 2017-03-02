import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';
import { routerReducer } from 'react-router-redux';

const allReducers = combineReducers({
  todos: TodoReducer,
  routing: routerReducer
});

export default allReducers;
