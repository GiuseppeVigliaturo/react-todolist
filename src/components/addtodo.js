import React from 'react';

//dobbiamo passare a questo componente una funzione per poter fare la dispatch
//per farlo usiamo il componente container che passa la proprietà addnew tramite connect
//la logica per la dispatch la mettiamo nel container
export default function addTodoComponent({addTodo, list }){

    let listaid = list;
     let todoInput;
    return(
        <div className='addtodo'>
            <h1 h1 > questo è l 'id della lista:{listaid} </h1>
            <input 
             onKeyUp = {
                 (evt) =>{
                    if( +evt.keyCode === 13){
                        addTodo(todoInput.value,listaid);
                        todoInput.value = '';
                    }
                 }
             }
            ref ={ node =>{todoInput = node}}/>
            
            <button onClick = {
                () => {
                    addTodo(todoInput.value,listaid)
                    todoInput.value = '';
                }}>Add</button>
        </div>
)
}
