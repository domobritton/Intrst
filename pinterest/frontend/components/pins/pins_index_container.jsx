import React from 'react';
import { connect } from 'react-redux';
import PinsIndex from './pins_index';
import { fetchPins, clearPinErrors } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';


const msp = ({ entities }) => {
  return {
    pins: Object.values(entities.pins)
  };
};

const mdp = dispatch => {
  return {
    fetchPins: () => dispatch(fetchPins()),
    clearPinErrors: () => dispatch(clearPinErrors()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(PinsIndex);
