import {
  combineReducers
} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pinsErrorsReducer from './pins_errors_reducer';
import boardErrorsReducer from './board_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  boards: boardErrorsReducer,
  pins: pinsErrorsReducer
});

export default errorsReducer;