import { combineReducers } from 'redux';
import addTodo from './addTodo';

const rootReducer = combineReducers({
    addTodo,
});

export default rootReducer;
