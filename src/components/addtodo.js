import React, {Fragment} from 'react';

//dobbiamo passare a questo componente una funzione per poter fare la dispatch
//per farlo usiamo il componente container che passa la proprietà addnew tramite connect
//la logica per la dispatch la mettiamo nel container
export default function addTodoComponent({addnew}){

     let todoInput;
    return(
        <div className='addtodo'>
            <input 
             onKeyUp = {
                 (evt) =>{
                    if( +evt.keyCode === 13){
                        addnew( todoInput.value );
                        todoInput.value = '';
                    }
                 }
             }
            ref ={ node =>{todoInput = node}}/>
            
            <button onClick = {
                () => {
                    addnew(todoInput.value)
                    todoInput.value = '';
                }
                }
                >Add</button>
        </div>
)
}

//per fare riferimento a un componente esterno uso la tecnica di riga 7
