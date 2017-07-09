export const ADD_TODO = 'ADD_TODO';
export const FINISH_TODO = 'FINISH_TODO';

export function finishTodo(text) {
    return { type: FINISH_TODO, text };
}

export function addTodo({text}) {
    return { type: ADD_TODO,text };
}
