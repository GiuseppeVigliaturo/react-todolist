import {connect } from 'react-redux';
import addTodoComponent from '../components/addtodo';
import {addTodo} from '../actions/index';
//per passare un metodo ad un componente:

const mapDispatchToProps = (dispatch) => {
    return {
        addnew: (todo) => {
            //la dispatch verrà fatta all'actioncreator
            dispatch(addTodo(todo))
        }
    }
}
export default connect(null, mapDispatchToProps)(addTodoComponent);


//export default connect(null, {addTodo})(addTodoComponent);

