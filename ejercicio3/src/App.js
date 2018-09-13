import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from './increment-component/Increment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      count : 1 
    };
  }

  doClick = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h1>{this.state.count}</h1>
        </div>
        <p className="App-intro">
          <Increment clickHandler={this.doClick} />
        </p>
      </div>
    );
  }
}

export default App;
