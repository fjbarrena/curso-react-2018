import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import ecotronico from './eco2';
import laliga from './laliga';

const rootReducer = combineReducers({
  counter,
  ecotronico,
  laliga,
  routing
});

export default rootReducer;
