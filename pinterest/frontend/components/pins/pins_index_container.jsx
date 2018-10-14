import React from 'react';
import { connect } from 'react-redux';
import PinsIndex from './pins_index';
import { fetchPins, clearPinErrors } from '../../actions/pin_actions';


const msp = ({ entities }) => {
  let result = Object.values(entities.pins);
  let pins = result.map(pin => pin.imageUrl);
  return {pins};
};

const mdp = dispatch => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    clearPinErrors: () => dispatch(clearPinErrors())
  };
};

export default connect(msp, mdp)(PinsIndex);
