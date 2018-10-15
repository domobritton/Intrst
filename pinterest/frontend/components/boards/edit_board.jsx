import React from 'react';
import {  Link, withRouter } from 'react-router-dom';

class EditBoard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: this.props.board.title,
      id: this.props.board.id,
      author_id: this.props.board.author_id
    };

    this.handleclick = this.handleclick.bind(this);

  }

  componentDidMount(){
    this.props.fetchBoardsPins();
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(e){
    this.setState({title: e.target.value});
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.updateBoard(this.state).then(this.props.closeModal())
    .then(()=>this.props.history
    .push(`/user/${this.props.currentUser.id}`));
  }

  handleclick(e){
    this.props.deleteBoard(this.state.id).then(this.props.closeModal())
    .then(this.props.history.push(`/user/${this.props.currentUser.id}`));
  }

  render(){
    return (
      <div>
        <form
        className='create-board-form'
        onSubmit={this.handleSubmit.bind(this)}>
          <div className='create-header'>
            <h3>Edit Board</h3>
          </div>
          <br/>
          <p>{this.renderErrors()}</p>
          <span
            class='close-modal'
            onClick={() => this.props.closeModal()}>
            <i className='fas fa-times'></i>
          </span>
          <label className='board-title'><span>Name</span>
          <input
            type='text'
            required value={this.state.title} onChange={this.update.bind(this)}/>
          </label>
          <br/>
          <br/>
          <div className='create-footer'>
            <button
              onClick={this.handleclick} className='board-delete-btn'>Delete
            </button>
            <button
              className='board-cancel-btn'
              onClick={() => this.props.closeModal()}>Cancel
            </button>
            <input
              className='board-submit-btn'
              type='submit'
              value='Update' />
          </div>
        </form>
      </div>
    );
  }
}

export default EditBoard;
