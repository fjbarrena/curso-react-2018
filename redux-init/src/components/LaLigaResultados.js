import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class LaLigaResultados extends Component {
  static propTypes = {
    resultados: PropTypes.array,
    actualizaResultado: PropTypes.func
  };

  consultaResultado = () => {
    console.log('Entrando en consultaResultado');
    console.log(this.props);

    setTimeout(() => {
      const { actualizaResultado } = this.props;

      actualizaResultado({
        resultados: [
          { nombreLocal: 'Levante', resultadoLocal: 2, nombreVisitante: 'Sevilla', resultadoVisitante: 6},
          { nombreLocal: 'Villarreal', resultadoLocal: 0, nombreVisitante: 'Valencia', resultadoVisitante: 0}
        ]
      });
    }, 5000);
  }

  render() {
    const { resultados, actualizaResultado } = this.props;

    console.log(this.props);

    return (
      <p>
        <span>{JSON.stringify(resultados)}</span>
        <button onClick={this.consultaResultado}>Actualizar Resultados</button>
      </p>
    );
  }
}
