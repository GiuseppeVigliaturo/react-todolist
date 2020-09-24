import React, { Component} from 'react';
//importiamo la store di redux 

import MytodoList from './containers/mytodolist';
import Header from './components/header';
import AddNewTodo from './containers/addnew';
import TodoFooterContainer from './containers/todofootercontainer';
import './App.css';




class App extends Component {

render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddNewTodo />
          <MytodoList />
         <TodoFooterContainer></TodoFooterContainer>
        </div>
      </div>
    );
  }
}

export default App;
