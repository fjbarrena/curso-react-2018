import React, { Component } from 'react';
import { connect } from 'react-redux';
import wrapActionCreators from '../utils/wrapActionCreators';
import * as LaLigaActions from '../actions/laliga';
import LaLigaResultados from '../components/LaLigaResultados';

@connect(state => ({
  resultados: state.laliga.resultados
}), wrapActionCreators(LaLigaActions))
export default class LaLigaPage extends Component {
  render() {
    return (
      <LaLigaResultados {...this.props} />
    );
  }
}
