import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";
import { clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = state => {
  return {
    errors: state.errors,
    formType: "Log in"
  };
};

const mdp = dispatch => {
  return {
    guest: user => dispatch(login(user)),
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(LoginForm);
