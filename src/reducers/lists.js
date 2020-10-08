import {
    LISTS,
    ADD_LISTS,
    REMOVE_LISTS
} from '../actions/actiontypes';

export default function listsReducer(state = [], action) {
    // console.log('state for todos', state)
    switch (action.type) {
        case `${LISTS}_FULFILLED`:
            return action.payload.data

        case `${ADD_LISTS}_FULFILLED`:
            //ritorno un array che ha come primo elemento quello che ci ritorna la chiamata e poi il vecchio stato
             return[

                 action.payload.data,
                 ...state
             ]

        case `${REMOVE_LISTS}_FULFILLED`:
             return state.filter(list => list.id !== action.payload.config.id);
        
        default:
            return state;
    }


}