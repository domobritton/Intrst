import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Continue',
    navLink: <Link to='/login'>Log in</Link>
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
