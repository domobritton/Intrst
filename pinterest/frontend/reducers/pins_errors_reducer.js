import {
  RECEIVE_PIN_ERRORS,
  CLEAR_PIN_ERRORS
} from '../actions/pin_actions';


const pinsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    case CLEAR_PIN_ERRORS:
      return [];
    default:
      return state;
  }
};

export default pinsErrorsReducer;
