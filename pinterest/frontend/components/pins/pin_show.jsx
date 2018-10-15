import React from 'react';
import {  Link, withRouter } from 'react-router-dom';


class PinShow extends React.Component{

  componentDidMount(){
    this.props.fetchPin(this.props.match.params.id);
    window.scroll(150,150);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPin(nextProps.match.params.id);
    }
  }

  render(){
    let author = this.props.pin_author;
    author = author[0].toUpperCase() + author.slice(1);

    if (this.props.pin){
      let val;
      if (this.props.pin.author_id === this.props.currentUser.id){
        val = <div
          className='pencil'><i class='fas fa-pencil-alt'></i></div>;
      } else {
        val = "";
      }

    return (
      <div className='show-div' onClick={() => this.props.history.goBack() }>
        <div>
          <div className='save-pin'>
            <div
              className='save-btn'
              onClick={() => this.props.openModal({modal: 'SavePin', pin: this.props.pin} )}>
              <img src={window.savebutton} className='savebutton'/>
            </div>
          </div>
          <div className='pin-comment'>{this.props.pin.comment}</div>
          <div>
            <img
              className='pin-image'
              src={this.props.pin.imageUrl} />
          </div>
          <div className='user-image'>
            <img src={this.props.pin.author_image}/>
          </div>
          <div className='author'>
            <strong>{author}</strong>&nbsp; saved pin to board
          </div>
        </div>
      </div>

      );
    } else {
      return null;
    }
  }
}

export default withRouter(PinShow);
