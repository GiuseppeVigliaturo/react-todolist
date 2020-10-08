import {connect } from 'react-redux';

import addTodoComponent from '../components/addtodo';
import { addList } from '../actions/lists';

/*utilizziamo il componente addTodo tanto il procedimento è lo stesso 
solo che invece di addTodo gli inviamo addList mappano però la proprietà 
con lo stesso nome */

export default connect(null, {addTodo : addList} )(addTodoComponent);