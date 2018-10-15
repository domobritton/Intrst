import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import CreatePinContainer from '../pins/create_pin_container';
import SavePinContainer from '../pins/save_pin_container';
import PinShowContainer from '../pins/pin_show_container';
import CreateBoardContainer from '../boards/create_board_container';
import EditBoardContainer from '../boards/edit_board_container';

const Modal = (props) => {
  if (!props.modal){
    return null;
  }


  let component;

  switch(props.modal.modal){
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


  let modalBackground;
  if(props.modal === 'CreatePin' || props.modal === 'CreateBoard'){
    modalBackground = {background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) )`};
  } else {
    modalBackground = {background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`};

  }


  return (
    <div className='modal-background' style={modalBackground}>
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
