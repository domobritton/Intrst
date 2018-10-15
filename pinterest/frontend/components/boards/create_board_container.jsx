import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import CreateBoard from './create_board';
import {
  createBoard,
  receiveBoardErrors } from '../../actions/board_actions';


const msp = (state,ownProps) => {
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
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter (connect (msp, mdp)(CreateBoard));
