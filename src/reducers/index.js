 export default function storeReducer(state = {}, action) {
   switch (action.type) {
     case "ADD_TODO":
       return {
         ...state,
         //sovrascrivo active filter cosi quando aggiungo un elemento visualizzo la lista todo 
         activeFilter: 'TODO',
          todos: [{
              id: state.todos.length,
              todo: action.payload.text,
              completed: action.payload.completed
            },
            ...state.todos
          ]
       };
     case "REMOVE_TODO":
       return {
         ...state,
         todos: [
           ...state.todos.slice(0, action.id),
           ...state.todos.slice(action.id + 1),
         ],
       };
      case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo
          }
          //ritorno la copia del todo cosi com'è e sovrascrivo solo la proprietà completed
          return {
            ...todo,
            completed: !todo.completed
          }
        })


      }
       case 'SET_FILTER': {
         return {
           ...state,
           activeFilter: action.activeFilter
         }

       }
     default:
       return { ...state};
   }
 }