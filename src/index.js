import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';
import {createStore,applyMiddleware,compose} from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
import promise from "redux-promise-middleware";
import { BrowserRouter} from 'react-router-dom';

//imposto uno stato iniziale nel caso la local storage fosse chiusa

let storeTodos = {
  todos: [],
  lists:[],
  setFilter: '',
  error: {
    hasError: '',
    errorMessage: ''
  }
};

//salvo i dati nella localstorage

 if (localStorage.getItem('mytodolist')) {
   const currState = JSON.parse(localStorage.getItem('mytodolist'));
   if (currState && !currState.error.hasError) {
     storeTodos = currState;
   }
 }

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(logger,promise),
      // other store enhancers if any
    );

const store = createStore(storeReducer,{...storeTodos},enhancer);

 store.subscribe(()=>{
       const state = store.getState();
       if(!state.error.hasError){
        const currState = JSON.stringify(state);
        localStorage.setItem('mytodolist', currState);
       }
})
ReactDOM.render( <
  Provider store = {store}>
 <BrowserRouter>
  
  <App/>
  
  </BrowserRouter>
</Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
