import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SavePinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: this.props.pin.comment,
      url: this.props.pin.url,
      imageUrl: this.props.pin.imageUrl,
      board_id: '',
    };
  }

  handleclick(val){
    return (e) => {
      this.setState({board_id: val});
    };
  }

  componentDidMount(){
    this.props.fetchBoards();
  }


  componentDidUpdate(prevProps, prevState) {
    const pin = this.state;
    if (pin.board_id !== '' && prevState !== this.state){
      this.props.createPin(pin).then(() => this.props.closeModal());
    }
  }

  render(){
    const boards = this.props.boards;
    return (
      <div className='save-pin-form'>
        <div>
        <span
          className='close-modal'
          onClick={() => this.props.closeModal()}>
        <i className='fas fa-times'></i>
      </span>
        <h3>Choose Board</h3>
        </div>
        <div className='form-left'>
          <div className='pin-upload-outer'>
            <div className='thumbnail-outer'>
              <img className='img-thumbnail'
                   src={this.state.imageUrl}/>
            </div>
          </div>
        </div>
        <ul className='board-selection'>
          {boards.map(board => {
            return (
              <li>
              <input
                type='submit'
                value={board.title}
                onClick={this.handleclick(board.id)}/>
              </li>
              );
            }
          )}
        </ul>

        <div
          className='board-info'
          onClick={() => this.props.openModal({modal: 'CreateBoard'} )}>
          <div
            className='create-board'>Create Board</div>
          <i
            id='add-board'
            className='fa fa-plus'
            aria-hidden="true"></i>
        </div>
      </div>
    );
  }

}

export default withRouter(SavePinForm);
