import React, { Component } from 'react';

class DeviceSectionHead extends Component {
    render() {
        return (
            <header className='masthead'>
              <h1>{this.props.data.deviceName}</h1>
              <div className='device-icon'>
                <i className='fa fa-mobile-phone'></i>
              </div>
            </header>
        );
    }
    
}
  
export default DeviceSectionHead;