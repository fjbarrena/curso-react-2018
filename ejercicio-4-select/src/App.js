import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  MyDatatable from './mydatatable/MyDatatable';
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 0,
      data: [
        {
          "name": "TIENDA",
          "puestos":
          [
            { "id": 1, "name": "Jefe de Tienda" }
          ]
        },
        {
          "name": "CENTRO DE COSTE",
          "puestos":
          [
            { "id": 1, "name": "Jefe de Centro de Coste" }
          ]
        },
        {
          "name": "PLATAFORMA",
          "puestos":
          [
            { "id": 1, "name": "Jefe de Plataforma" }
          ]
        },
        {
          "name": "CORPORATIVO",
          "puestos":
          [
            { "id": 1, "name": "Jefe de Corporativo" }
          ]
        },
      ]
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ 
      selectedValue : event.target.value ,
      data: this.state.data
    });
  };
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
          <select onChange={this.handleChange}>
            <option value="0">TIENDA</option>
            <option value="1">CENTRO DE COSTE</option>
            <option value="2">PLATAFORMA</option>
            <option value="3">CORPORATIVO</option>
          </select>

          <MyDatatable data={this.state.data} 
            selectedIndex={this.state.selectedValue} />
        </p>
      </div>
    );
  }
}

export default App;
