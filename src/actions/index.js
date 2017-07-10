export const ADD_TODO = 'ADD_TODO';
export const ON_TODO_CLICK = 'ON_TODO_CLICK';
export const FINISH_TODO = 'FINISH_TODO';

export function finishTodo(text) {
    return { type: FINISH_TODO, text };
}

export function addTodo({text}) {
    return { type: ADD_TODO,text };
}
export function onTodoClick(text) {
    return { type: ON_TODO_CLICK,text };
}
