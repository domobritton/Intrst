import React from 'react';
import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import SavePinForm from './save_pin_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import {
  createBoard,
  fetchBoard,
  fetchBoards
} from '../../actions/board_actions';



const msp = (state) => {
  let currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
    boards: Object.values(state.entities.boards)
  };
};

const mdp = dispatch => {
  return {
    createPin: (formData) => dispatch(createPin(formData)),
    createBoard: (board) => dispatch(createBoard(board)),
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchBoards: () => dispatch(fetchBoards()),
  };
};

export default connect (msp, mdp)(SavePinForm);
