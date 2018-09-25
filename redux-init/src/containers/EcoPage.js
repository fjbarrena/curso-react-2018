import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as EcoActions from '../actions/eco';
import wrapActionCreators from '../utils/wrapActionCreators';
import Eco from '../components/Eco';

@connect(state => ({
  selectedMessage: state.ecotronico.selectedMessage
}), wrapActionCreators(EcoActions))
export default class EcoPage extends Component {
  render() {
    return (
      <Eco {...this.props} />
    );
  }
}
