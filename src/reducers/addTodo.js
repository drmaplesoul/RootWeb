import uuid from 'uuid';

import * as ActionTypes from '../actions/index';

const initialState = {
    todos:[],
    onTodoClick:function(id){
        console.log("click todo id is "+id);
    }
};

export default function addTodo(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:{
            state.todos.push({text:action.text,id:uuid.v4(),completed:false});;
            return state;
        }
        default:
            return state;
    }
}