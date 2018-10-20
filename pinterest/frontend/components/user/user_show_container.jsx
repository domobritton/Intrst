import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserShow from "./user_show";
import { openModal } from "../../actions/modal_actions";
import { fetchBoards } from "../../actions/board_actions";

const msp = ({ session, entities: { users } }) => {
  const user = users[session.id];
  return {
    user: user,
    boards: Object.values(user.boards || {}),
    pins: Object.values(user.pins || {})
  };
};

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(UserShow));
