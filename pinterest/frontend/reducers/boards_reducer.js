import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from '../actions/board_actions';
import { REMOVE_PIN, RECEIVE_PIN } from '../actions/pin_actions';


const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      if (action.payload.boards === undefined) return {};
      return action.payload.boards;
    case RECEIVE_BOARD:
      let id = Object.values(action.payload.board)[0].id;
      let value = Object.values(action.payload.board)[0];
      return Object.assign({}, state, {[id]: value});
    case REMOVE_BOARD:
      let deleteId = Object.values(action.id.board)[0].id;
      const newState = Object.assign({}, state);
      delete newState[deleteId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
