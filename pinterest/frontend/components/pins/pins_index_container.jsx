import React from 'react';
import { connect } from 'react-redux';
import PinsIndex from './pins_index';
import { clearPinErrors } from '../../actions/pin_actions';

const msp = (state) => {
  return {
    pins: [
      'https://source.unsplash.com/user/theburbgirl',
      'https://source.unsplash.com/user/stilclassics',
      'https://source.unsplash.com/user/petebellis',
      'https://source.unsplash.com/user/tonyross',
      'https://source.unsplash.com/user/zohre_nemati',
      'https://source.unsplash.com/user/mfrattaroli',
      'https://source.unsplash.com/user/renatafraga',
      'https://source.unsplash.com/user/clemono2'
    ]
  };
};

const mdp = dispatch => {
  return {
    clearPinErrors: () => dispatch(clearPinErrors())
  };
};

export default connect(msp, mdp)(PinsIndex);
