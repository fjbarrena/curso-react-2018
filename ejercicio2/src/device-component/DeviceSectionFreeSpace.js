import React, { Component } from 'react';

class DeviceSectionFreeSpace extends Component {
    render() {
      const availableSpace = this.props.data.availableSpace;
      const usedSpace = this.props.data.photosTotalSpace 
        + this.props.data.videosTotalSpace;
      
      const porc = (usedSpace * 100) / availableSpace;

      console.log(this.props.data);
        return (
            <article className='device-info'>
          <div className='device-space' onClick={this.props.clickHandler}>
            <h3>Free Space</h3>
              <div className='available-space'>
              <div style={{width: porc +"%", background: '#27ae60'}}></div>
            </div>
          </div>
          <ul className='device-legend'>
            <li><i className="fa fa-circle videos"></i> Videos</li>
            <li><i className="fa fa-circle photos"></i> Photos</li>
            <li><i className="fa fa-circle available"></i> Available</li>
          </ul>
        </article>
        );
    }
    
}
  
export default DeviceSectionFreeSpace;