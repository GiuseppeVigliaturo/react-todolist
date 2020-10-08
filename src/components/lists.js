import React from 'react';
import List from './list';
import AddList from '../containers/addnewlist';
export default function lists(props) {

   return (
      < div className = "container" >
         <AddList></AddList>
    
      <ul className="lists">
      {
         props.lists.map( list => <List key={list.id} list= {list} removeList= {props.removeList}/>)   
                }
      </ul>
   </div>
);
}
