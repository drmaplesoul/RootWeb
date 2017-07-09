import * as ActionTypes from '../actions/index';

const initialState = {};

export default function finish(state = state, action) {
    switch (action.type) {
        case ActionTypes.FINISH_TODO:
            return state;
        default:
            return state;
    }
}