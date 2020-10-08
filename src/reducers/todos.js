import {
    TODOS,
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO

} from './../actions/actiontypes';
//adesso lo state che ritorniamo dopo lo spezzettamento corrisponde al vecchio state.todos
//state corrisponde ora ad un arry di todos
export default function todosReducer(state = [], action) {
   // console.log('state for todos', state)
    switch (action.type) {
        case `${ADD_TODO}_FULFILLED`:
            return [
                action.payload.data,
                ...state
            ];

        case `${REMOVE_TODO}_FULFILLED`:

            return state.filter(ele => ele.id !== action.payload.config.id);

        case `${TOGGLE_TODO}_FULFILLED`:
            return state.map((todo) => {
                if (todo.id !== action.payload.data.id) {
                    return todo
                }
                return action.payload.data
            });

        case `${TODOS}_FULFILLED`:
            const list = +action.payload.config.list;
            console.log(action.payload.config);
            if(!list){
              return  action.payload.data;
            }
            return  action.payload.data.filter(todo => +todo.list === list);

        default:
            return state;
    }


}