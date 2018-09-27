import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>redux-init</h2>

        <Link to="/">Home Page</Link> -&nbsp;
        <Link to="/eco">EcoMensajes</Link> -&nbsp;
        <Link to="/laliga">Resultados</Link> -&nbsp;
        <Link to="/another">Another Page</Link>
      </div>
    );
  }
}
