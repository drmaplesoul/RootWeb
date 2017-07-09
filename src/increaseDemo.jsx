import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';


//组件
class Counter extends Component {
  render() {
    const { value, actions } = this.props;
    //console.log("value="+value+",onclick="+actions+",increaseAction="+actions.increaseAction+",props="+this.props);
    return (
        <div>
          <span>{value}</span>
          <button onClick={actions.increaseAction}>Increase</button>
        </div>
    )
  }
}
//const Counter = ({value,actions})=>(
//    <div>
//      <span>{value}</span>
//      <button onClick={actions.onIncreaseClick}>Increase</button>
//    </div>
//);
//校验
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
}

// Action
function increaseAction (){
  return {
    type:"increase"
  }
}

// Reducer
function counter(state = { count: 10 }, action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    default:
      return state
  }
}

// Store
const store = applyMiddleware(
    thunkMiddleware
)(createStore)(counter);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({increaseAction:increaseAction}, dispatch),
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const container = document.body.appendChild(
    document.createElement('div')
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    container
)
