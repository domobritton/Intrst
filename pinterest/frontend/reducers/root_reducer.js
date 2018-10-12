import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './session_errors_reducer';
import pinsErrorsReducer from './pins_errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  pinErrors: pinsErrorsReducer
});

export default rootReducer;
