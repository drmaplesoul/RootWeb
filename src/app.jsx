/*
 * @file main file for app deskmark
 */

import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import TodoList from './components/TodoList';
//import rootReducer from './reducers/root';
import reducers from './reducers/todoReducers.js';
import * as actionCreators from './actions/index';

//import 'bootstrap/scss/bootstrap.scss';

// create store with middlewares
const store = applyMiddleware(
    thunkMiddleware
)(createStore)(reducers);

// create root component based on component Deskmark
const App = connect(
        state => ({
            todos:state.todos,
        }),
        dispatch => ({
        actions: bindActionCreators(actionCreators, dispatch),
    })
)(TodoList);

// create DOM container
const container = document.body.appendChild(
    document.createElement('div')
);

// render root conponent with store to DOM container
render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);
