import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var names = ['Paco', 'Juan', 'Daniel'];
    var namesList = names.map(function(name){
                    return <li>{name}</li>;
                  })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <ul>
            {namesList}
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
