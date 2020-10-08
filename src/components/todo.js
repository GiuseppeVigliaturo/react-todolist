import React from 'react';
import PropTypes from 'prop-types';

export default function todo({todoItem, removeTodo, toggleTodo, id}){

return (
<li className = { todoItem.completed ? 'completed' : ''}>
<span className={todoItem.completed? 'completed':'uncomplete'} 
onClick = {
    () => {
        toggleTodo(id, !todoItem.completed)
}}
></span>
{todoItem.todo} 
<span className="cross" onClick = {
    (e) => {
        e.stopPropagation();
        removeTodo(id)
    }
}></span>
</li>
) ;
}
todo.defaultProps = {
    id: 0
}
todo.propTypes = {

    todoItem: PropTypes.shape({
        completed: PropTypes.bool,
        todo: PropTypes.string,
        id: PropTypes.number,
        list:PropTypes.number
    }),
    toggleTodo: PropTypes.func.isRequired,
    id: PropTypes.number,
    removeTodo: PropTypes.func.isRequired
}