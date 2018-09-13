import React, { Component } from 'react';
import DeviceSectionInfo from "./DeviceSectionInfo";

class DeviceCard extends Component {
    doOnClick = (event) => {
        alert('Click');
    }
    render() {  
        return (
            <div className='ui-card'>
              <DeviceSectionInfo data={this.props.data} 
                    clickHandler={this.doOnClick} />
            </div>
        );
    }
}
  
export default DeviceCard;