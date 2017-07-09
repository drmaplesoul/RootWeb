import { combineReducers } from 'redux';
import addTodo from './addTodo';
import finish from './finish';

const rootReducer = combineReducers({
    addTodo,
    //finish,
});

export default rootReducer;
