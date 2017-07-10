import React, { PropTypes ,Component} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, actions }) => (
    <ul>
    {todos.map(todo =>
            <Todo
                key={todo.id}
        {...todo}
                onClick={() => actions.onTodoClick(todo.text)}
            />
    )}
    </ul>
)
//class TodoList extends Component {
//    render() {
//        const { todos, actions } = this.props;
//        console.log("value="+value+",onclick="+actions+",onTodoClick="+actions.onTodoClick+",props="+this.props);
//        return (
//            <ul>
//            {todos.map(todo =>
//                    <Todo
//                        key={todo.id}
//                {...todo}
//                        onClick={() => actions.onTodoClick(todo.id)}
//                    />
//            )}
//            </ul>
//        )
//    }
//}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.shape({
        onTodoClick:PropTypes.func.isRequired
    }).isRequired
}

export default TodoList