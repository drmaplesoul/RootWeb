import uuid from 'uuid';

import * as ActionTypes from '../actions/index';

const initialState = {
    todos:[
        {id:uuid.v4(),completed:false,text:"Default Item"}
    ],
    //onTodoClick:function(id){
    //    console.log("click todo id is "+id);
    //}
};

export default function addTodo(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:{
            state.todos.push({text:action.text,id:uuid.v4(),completed:false});
            return state;
        }
        case ActionTypes.ON_TODO_CLICK:{
            console.log(action.text+" is clicked!");
            return state;
        }
        default:
            return state;
    }
}