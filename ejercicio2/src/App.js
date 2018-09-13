import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeviceCard from './device-component/DeviceCard';

class App extends Component {
  render() {

    let device_data = [
      {
        deviceType       : 'iphone',
        deviceName       : 'iPhone 6',
        availableSpace   : 2048,  // megabytes
        photosTotalSpace : 768, // megabytes
        videosTotalSpace : 384  // megabytes
      },
      {
        deviceType       : 'tablet',
        deviceName       : 'Nexus Tablet',
        availableSpace   : 6000,  // megabytes
        photosTotalSpace : 111, // megabytes
        videosTotalSpace : 3124  // megabytes
      },
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          {
            device_data.map((obj, index) => {
              return <div key={index}><DeviceCard data={obj}/></div>
            })
          }
          
      </div>
    );
  }
}

export default App;
