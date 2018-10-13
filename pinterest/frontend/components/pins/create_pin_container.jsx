import { connect } from 'react-redux';
import CreatePinForm from './create_pin_form';
import { createPin, pinErrors } from './../../actions/pin_actions';


const msp = (state) => {
  return {
    errors: state.errors,
  };
};

const mdp = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    pinErrors: errors => dispatch(pinErrors(errors))
  };
};

export default connect (msp, mdp)(CreatePinForm);
