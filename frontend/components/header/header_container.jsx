import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Header from "./header";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Header);
