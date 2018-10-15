import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import boardPinsReducer from './board_pins_reducer';

const entitiesReducer = combineReducers({
  boardPins: boardPinsReducer,
  boards: boardsReducer,
  users: usersReducer,
  pins: pinsReducer
});

export default entitiesReducer;
