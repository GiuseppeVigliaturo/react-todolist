import {connect } from 'react-redux';
import addTodoComponent from '../components/addtodo';
import {addTodo} from '../actions/index';

//per passare un metodo ad un componente:

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo,list) => {
            //la dispatch verrà fatta all'actioncreator
            dispatch(addTodo(todo,list))
        }
    }
}
export default connect(null, mapDispatchToProps)(addTodoComponent);

//versione corta

//export default connect(null, {addTodo} )(addTodoComponent);

