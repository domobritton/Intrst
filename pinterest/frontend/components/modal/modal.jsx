import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import CreatePinContainer from '../pins/create_pin_container';
import SavePinContainer from '../pins/save_pin_container';
import PinShowContainer from '../pins/pin_show_container';
import CreateBoardContainer from '../boards/create_board_container';
import EditBoardContainer from '../boards/edit_board_container';
import SignupFormContainer from '../session/signup_form_container';

const Modal = (props) => {
  if (!props.modal){
    return null;
  }


  let component;

  switch(props.modal.modal){
    case 'ShowSignup':
      component = <SignupFormContainer />;
      break;
    case 'ShowLogin':
      component = <LoginFormContainer />;
      break;
    case 'ShowPin':
      component = <PinShowContainer />;
      break;
    case 'CreatePin':
      component = <CreatePinContainer />;
      break;
    case 'SavePin':
      component = <SavePinContainer pin={props.modal.pin}/>;
      break;
    case 'CreateBoard':
      component = <CreateBoardContainer />;
      break;
    case 'EditBoard':
      component = <EditBoardContainer board={props.modal.board}/>;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background'>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );

};

const mapStateToProps = (state) => {
    return {
      modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
