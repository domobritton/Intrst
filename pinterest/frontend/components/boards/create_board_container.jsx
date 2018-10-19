import { connect } from 'react-redux';
import CreateBoard from './create_board';
import { openModal, closeModal } from '../../actions/modal_actions';
import {
  createBoard,
  receiveBoardErrors } from '../../actions/board_actions';


const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.boards,
  };
};

const mdp = dispatch => {
  return {
    receiveBoardErrors: (errors) => dispatch(receiveBoardErrors(errors)),
    createBoard: (board) => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(CreateBoard);
