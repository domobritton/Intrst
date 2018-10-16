import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinsUser from './pins_user';
import {
  pinErrors,
  deletePin,
  fetchPins
} from '../../actions/pin_actions';
import {
  createBoard,
  fetchBoardsPins,
  fetchBoardPin
} from '../../actions/board_actions';

const msp = (state, ownProps) => {
  let pins = Object.values(state.entities.boardPins || {});
  debugger;
  let currentBoard;
  if (ownProps.match.path === "/user/:id/boards/:id/pins") {
    currentBoard =  state.entities.boards[ownProps.match.params.id];
  }
  else {
    currentBoard = {id: "",title: ""};
  }

  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.pins,
    pins: pins,
    currentBoard: currentBoard
  };
};

const mdp = dispatch => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    fetchBoardsPins: () => dispatch(fetchBoardsPins()),
    fetchBoardPin: (id) => dispatch(fetchBoardPin(id)),
    pinErrors: (errors) => dispatch(pinErrors(errors)),
    deletePin: (id) => dispatch(deletePin(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};



export default withRouter(connect(msp, mdp)(PinsUser));
