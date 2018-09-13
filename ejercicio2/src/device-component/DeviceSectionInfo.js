import React, { Component } from 'react';
import DeviceSectionHead from "./DeviceSectionHead";
import DeviceSectionFreeSpace from "./DeviceSectionFreeSpace";

class DeviceSectionInfo extends Component {
    render() {
        return (
            <section className='content'>
                <DeviceSectionHead data={this.props.data} />
                <DeviceSectionFreeSpace clickHandler={this.props.clickHandler} data={this.props.data} />
            </section>
        );
    }
    
}
  
export default DeviceSectionInfo;