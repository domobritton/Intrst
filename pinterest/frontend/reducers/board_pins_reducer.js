import {
  RECEIVE_BOARDSPINS,
  RECEIVE_BOARDPINS
} from '../actions/board_actions';


const boardPinsReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDSPINS:
      if (action.payload.pins === undefined) return {};
      return action.payload.pins;
    case RECEIVE_BOARDPINS:
      if (action.payload.pins === undefined) return {};
      return action.payload.pins;
    default:
      return state;
  }
};

export default boardPinsReducer;
