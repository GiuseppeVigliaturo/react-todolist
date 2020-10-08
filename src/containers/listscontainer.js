import {connect } from 'react-redux';
import lists from '../components/lists';
import { addList, removeList }   from '../actions/lists';

//collego la store al componente avvolgendolo con un container
 const mapStateToProps = (state) => {
    return {
       lists: state.lists
    }
}
const myConnect = connect(mapStateToProps,{addList,removeList });

const MyList = myConnect(lists);

export default MyList;