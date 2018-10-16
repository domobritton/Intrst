import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'Continue'
  };
};

const mdp = dispatch => {
  return {
    guest: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: (modal) => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
