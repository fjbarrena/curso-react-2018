import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Eco extends Component {
  static propTypes = {
    selectedMessage: PropTypes.string,
    giveMeEcoMessage: PropTypes.func
  };

  render() {
    const { selectedMessage, giveMeEcoMessage } = this.props;

    console.log(this.props);

    return (
      <p>
        <span>{selectedMessage}</span>
        <button onClick={() => giveMeEcoMessage()}>Dame mensaje</button>
      </p>
    );
  }
}
