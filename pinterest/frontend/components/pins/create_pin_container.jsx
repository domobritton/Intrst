import { connect } from 'react-redux';
import CreatePinForm from './create_pin_form';
import {
  createPin,
  pinErrors,
  clearPinErrors } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state) => {
  return {
    errors: state.errors,
  };
};

const mdp = dispatch => {
  return {
    createPin: (formData) => dispatch(createPin(formData)),
    pinErrors: (errors) => dispatch(pinErrors(errors)),
    closeModal: () => dispatch(closeModal()),
    clearPinErrors: (errors) => dispatch(clearPinErrors(errors))
  };
};

export default connect (msp, mdp)(CreatePinForm);
