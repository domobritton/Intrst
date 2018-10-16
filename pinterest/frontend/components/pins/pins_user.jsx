import React from 'react';
import {  Link, withRouter } from 'react-router-dom';
import UserShow from '../user/user_show';
import Masonry from 'react-masonry-component';


class PinsUser extends React.Component {
  componentDidMount() {
    if (this.props.match.path === '/user/:id/boards/:id/pins') {
      this.props.fetchBoardPin(this.props.match.params.id);
    } else {
      this.props.fetchBoardsPins();
    }
  }

  componentWillReceiveProps(prevProps, prevState) {
    if (prevProps.pins.length !== this.props.pins.length){
      if (this.props.match.path === '/user/:id/boards/:id/pins') {
        this.props.fetchBoardPin(this.props.match.params.id);
      } else {
        this.props.fetchBoardsPins();
      }
    }
   }

  displayPins() {
    const { pins } = this.props;
    debugger;
    let masonryOptions = {
        transitionDuration: 1,
        gutter: 20,
    };

    if (pins === []){
      return '';
    }

    return (
      <div className='user-profile-items'>
        <Masonry
          className='profile-boards-container'
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
         >
         <div className='board-items-outer'>
            <div
              className='board-item-container'
              onClick={() => this.props.openModal({modal: 'CreatePin'})}>
              <div className='plus-outer'>
              <i className='fa fa-plus' aria-hidden='true'></i>
              </div>
            </div>
            <div className='container-footer'>
              <p>Create pin</p>
            </div>
          </div>

          {pins.map(pin =>
            <div className='outer-pin-show' onClick={ () => this.props.history.push(`/pin/${pin.pin.id}`) }>
              <div className='index-image'>
                <div className='save-pin-modal'>
                  <div
                    className='save-pin'
                    onClick={e => {e.preventDefault();
                    this.props.openModal({modal: 'SavePin', pin: pin} );}}>Save
                  </div>
                </div>
                  <div className='pin-masonry'>
                    <div>
                      <img src={pin.pin.image_url}/>
                    </div>
                    <span>{pin.pin.title}</span>
                  </div>
              </div>
            </div>
            )}
        </Masonry>
      </div>
    );
  }

  render(){

    if (!this.props.currentBoard) {
      return (
        <div className='loading'>
          <div className='loading-circle'></div>
        </div>

      );
    }

    return(
      <div>
        <div>
          <div
            className='edit-board'
            onClick={() => this.props.openModal({modal: 'EditBoard',
               board: this.props.currentBoard})}>
               <span><i className='fas fa-pencil-alt'></i></span>
          </div>
          <h3>{this.props.currentBoard.title}</h3>
        </div>
          {this.displayPins()}
      </div>
    );
  }
}

export default withRouter(PinsUser);
