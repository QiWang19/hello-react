import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
// import './App.css';

class App extends Component {
  

  render(){
    const user = {
      name : "Anns",
      hobbies:["Sports", "Reading"]
    }
    return (
      
      <div className="container">
        <div className="row">
          <div className="col-xs-l col-xs-offset-11">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-l col-xs-offset-11">
            <h1>hello !!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-l col-xs-offset-11">
            <Home name = {"Max"} age = {12} user = {user} />
          </div>
        </div>
      </div>
      
    );
    
  }
}

export default App;

