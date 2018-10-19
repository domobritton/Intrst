import React from 'react';
import {  Link, withRouter } from 'react-router-dom';
import UserShow from '../user/user_show';
// import Masonry from 'react-masonry-component';
import MasonryGrid from '../masonry/masonry_grid';
import Tile from '../masonry/masonry_grid_item';


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
    let breakPoints = [500, 700, 1150];

    if (pins === []){
      return '';
    }
    return (
      <div className='pins-user-container'>
      <div id='pinsIndexWrapper'>
        <div className='feed-masonry-container'>

          <MasonryGrid breakPoints={breakPoints}>
          {pins.map((pin, id) => {
            return id === 0 ? (
              <div className='pin-create-outer'>
                 <div
                   className='pin-create-container'
                   onClick={() => this.props.openModal({modal: 'CreatePin'})}>
                   <div className='plus-outer'>
                   <i className='fa fa-plus' aria-hidden='true'></i>
                   </div>
                 </div>
                 <div className='pin-create-footer'>
                   <p>Create pin</p>
                 </div>
               </div>
            ) : (
            <div className='pin-show' onClick={ () => this.props.history.push(`/pin/${pin.pin.id}`) }>
              <div className='show-modal'>
                <div
                  className='pin-save'
                  onClick={e => {e.preventDefault();
                  this.props.openModal({modal: 'SavePin', pin: pin} );}}>
                  <div>
                    <Tile key={pin.pin.id}
                      src={pin.pin.imageUrl}
                      comment={pin.comment} />
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </MasonryGrid>
      </div>
      </div>
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
          <h3>{this.props.currentBoard.title}</h3>
        </div>
          {this.displayPins()}
      </div>
    );
  }
}

export default withRouter(PinsUser);
