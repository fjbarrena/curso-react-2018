import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import ecotronico from './eco2';

const rootReducer = combineReducers({
  counter,
  ecotronico,
  routing
});

export default rootReducer;
