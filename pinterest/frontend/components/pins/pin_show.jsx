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

    if (this.props.pin){
      let val;
      if (this.props.pin.author_id === this.props.currentUser.id){
        val = <div
          className='pencil'><i class='fas fa-pencil-alt'></i></div>;
      } else {
        val = "";
      }

    return (
      <div className='pin-show-outer'>
      <div className='show-div' onClick={() => this.props.history.goBack() }>
          <div className='back-btn'>
            <span><i className="fas fa-chevron-left"></i><p>Back</p></span></div>
          <div className='center-div-show'>
            <div className='center-div-inner'>
            <div className='pin-show-header'>
          <div className='save-pin'>
              <div
                className='pin-save'
                onClick={(e) => {e.preventDefault(); this.props.openModal({modal: 'SavePin', pin: this.props.pin});}}>
                <div className='save-show-pin'>
                  <i className="fas fa-thumbtack"></i>
                  <p>Save</p>
                </div>
              </div>
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
          </div>
          </div>
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
