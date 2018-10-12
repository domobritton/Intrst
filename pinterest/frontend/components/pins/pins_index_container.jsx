import React from 'react';
import { connect } from 'react-redux';
import PinsIndex from './pins_index';
import { clearPinErrors } from '../../actions/pins_actions';

const msp = (state) => {
  return {
    pins: Object.value(state.entities.pins) || []
  };
};

const mdp = dispatch => {
  return {
    clearPinErrors: () => dispatch(clearPinErrors())
  };
};

export default connect(msp, mdp)(PinsIndex);
