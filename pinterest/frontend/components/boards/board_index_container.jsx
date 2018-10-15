import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardIndexComponent from './board_index_component';
import {
  fetchBoards,
  receiveBoardErrors,
  deleteBoard,
  createBoard,
  updateBoard,
  fetchBoardsPins
} from '../../actions/board_actions';


const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];

  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.boards,
    boards: Object.values(state.entities.boards),
    boardPins: Object.values(state.entities.boardPins || {}),
  };
};

const mdp = dispatch => {
  return {
    updateBoard: (board) => dispatch(updateBoard(board)),
    receiveBoardErrors: (errors) => dispatch(receiveBoardErrors(errors)),
    deleteBoard: (id) => dispatch(deleteBoard(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
    fetchBoardsPins: () => dispatch(fetchBoardsPins()),
  };
};



export default withRouter(connect(msp, mdp)(BoardIndexComponent));
