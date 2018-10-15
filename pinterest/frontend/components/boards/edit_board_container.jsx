import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditBoard from './edit_board';
import { deletePin } from '../../actions/pin_actions';
import {
  updateBoard,
  receiveBoardErrors,
  deleteBoard,
  createBoard,
  fetchBoardsPins,
  fetchBoardPins} from '../../actions/board_actions';

const msp = (state,ownProps) => {
  let location = ownProps.location.pathname.slice(15);
  let pins = Object.values(state.entities.boardPins);
  let path = location.replace(/\/pins/g,'');
  let boardPins = pins.filter(pin => pin.board_id === path);
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.boards,
    board: state.entities.boards[path.slice(1)],
    pins: boardPins
  };
};

const mdp = dispatch => {
  return {
    receiveBoardErrors: (errors) => dispatch(receiveBoardErrors(errors)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    deleteBoard: (id) => dispatch(deleteBoard(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    deletePin: (id) => dispatch(deletePin(id)),
    fetchBoardsPins: () => dispatch(fetchBoardsPins()),
  };
};

export default withRouter (connect (msp,mdp)(EditBoard));
