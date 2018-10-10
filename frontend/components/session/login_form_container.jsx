import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    navLink: <Link to='/signup' style={{ textDecoration: 'none', color: '#000' }}>Not on Intrst yet? Sign Up</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(LoginForm);
