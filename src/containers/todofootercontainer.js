import {connect } from 'react-redux';
import todoFooterComponent from '../components/todofooter';
import {filterTodo} from '../actions/index';
//per passare un metodo ad un componente:

 const mapStateToProps = (state) => {
    return {
    
       activeFilter: (state.activeFilter)
    }
}

export default connect(mapStateToProps, {filterTodo})(todoFooterComponent);