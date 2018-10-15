import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import {  Link, withRouter } from 'react-router-dom';
import PinShow from './pin_show';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {

  const pin = state.entities.pins[ownProps.match.params.id];
    return {
      pin: state.entities.pins[ownProps.match.params.id],
      currentUser: state.entities.users[state.session.id],
      pin_author: pin.author_username,
    };
};

const mdp = dispatch => ({
  fetchPin: (id) => dispatch(fetchPin(id)),
  openModal: (modal) => dispatch(openModal(modal))
});



export default withRouter(connect(msp, mdp)(PinShow));
