import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './containters/Sidebar';
import Main from './containters/Main';
import Footer from './containters/Footer';
import Header from './containters/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <Header />
        </div>

        <div className="col-md-12">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div className="col-md-10">
            <Main />
          </div>
        </div>

        <div className="col-md-12">
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default App;
