import {connect } from 'react-redux';
import todoFooterComponent from '../components/todofooter';
import {filterTodo} from '../actions/index';
//per passare un metodo ad un componente:
//mentre il combine reducer prende ognuno una fetta dello stato 
//i vari container prenderanno invece tutto lo stato
 const mapStateToProps = (state) => {
    return {
    
       activeFilter: (state.setFilter)
    }
}

export default connect(mapStateToProps, {filterTodo})(todoFooterComponent);