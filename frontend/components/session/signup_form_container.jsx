import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors,
    formType: 'Continue',
    navLink: <Link to='/login' style={{ textDecoration: 'none', color: '#717171' }}>Log in</Link>
  };
};

const mdp = dispatch => {
  return {
    guest: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
