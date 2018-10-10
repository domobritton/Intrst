import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to='/signup'>Not on Intrst yet? Sign Up</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);