import {APILISTSURL} from '../config/config';
import axios from 'axios';

import {LISTS,ADD_LISTS,REMOVE_LISTS} from './actiontypes';

export const getLists = () => {
    return {
        type: LISTS,
        payload: axios.get(APILISTSURL)
    }
}

export const addList = (title) => {
    return {
        type: ADD_LISTS,
        payload: axios.post(APILISTSURL, {
        title
        })
    }
}

export const removeList = (i) => {
    return {
        type: REMOVE_LISTS,
        payload: axios.delete(APILISTSURL+ '/' + i, {id: i})
    }
}