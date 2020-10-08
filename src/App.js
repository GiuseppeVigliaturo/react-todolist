import React, { Component} from 'react';
//importiamo la store di redux 

import Header from './components/header';

import './App.css';
import {connect } from 'react-redux';
import {getTodos} from "./actions/index";
import {getLists} from "./actions/lists";
import Mytodos from './containers/mytodos';
import Lists from './containers/listscontainer';
import {Route,Switch} from 'react-router-dom';


  
class App extends Component {

  componentDidMount() {
    this.props.getTodos();
    this.props.getLists();
  }
//con lo switch passiamo in rassegna le rotte e ritorna la prima che combacia
 render() {
    return (
      <div className="App">
       <Header/>
       
       <Switch>
        <Route path ="(/|/todos)" component={Mytodos} />
        <Route path ="/lists/:list/todos" component={Mytodos} />
        <Route path="/lists"  component={Lists}   />
       
        </Switch>
      </div>
    );
  }
}


export default connect(null, {getTodos,getLists})(App);
