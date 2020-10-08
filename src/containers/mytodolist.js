import {connect } from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo,toggleTodo,getTodos} from '../actions/index';

//creo una funzione helper che filtra i todo in base al filtro 
const filterTodo = (todos=[],filter ='ALL') => {

    switch (filter) {
        case 'TODO':
            return todos.filter( (todo) => !todo.completed )
          
        case 'COMPLETED':
                return todos.filter( (todo) => todo.completed )

        default:
             return todos
            
    }
    
}
//collego la store al componente avvolgendolo con un container
 const mapStateToProps = (state) => {
    return {
        ...state,
       todos: filterTodo(state.todos, state.setFilter)
    }
}
const myConnect = connect(mapStateToProps,{removeTodo,toggleTodo,getTodos});

const MyTodoList = myConnect(TodoList);

export default MyTodoList;