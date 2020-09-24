import React from 'react';
export default function todo({todoItem, onClick, id}){

return (
<li  className={todoItem.completed? 'completed':''} onClick ={() => onClick(id)}>
<span className={todoItem.completed? 'completed':'uncomplete'}></span>
{todoItem.todo} 
</li>
) ;
}