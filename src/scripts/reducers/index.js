import { combineReducers } from 'redux';
import athleteReducer from './athleteReducer';
import readerReducer from './readerReducer';
import captureReducer from './captureReducer';

export default combineReducers({
  athletes: athleteReducer,
  readers: readerReducer,
  captures: captureReducer
});
