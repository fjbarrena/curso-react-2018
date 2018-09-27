import { handleActions } from 'redux-actions';
import { actualizaResultado } from '../actions/laliga';

const initialState = { resultados: [] };

export default handleActions({
  [actualizaResultado]: (state, action) => ({
    resultados: action.payload.resultados
  })
}, initialState);


/*
resultados: [
      { nombreLocal: 'Levante', resultadoLocal: 2, nombreVisitante: 'Sevilla', resultadoVisitante: 6},
      { nombreLocal: 'Villarreal', resultadoLocal: 0, nombreVisitante: 'Valencia', resultadoVisitante: 0}
    ]
*/