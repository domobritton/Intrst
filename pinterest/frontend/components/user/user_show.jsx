import React from 'react';
import {  Link, withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PinsUserContainer from '../pins/pins_user_container';
import BoardIndexContainer from '../boards/board_index_container';
import PinsIndexContainer from '../pins/pins_index_container';


class UserShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      component: 'boardIndexContainer',
      active: false
    };
  }

  componentDidMount(){
    this.forceUpdate();
  }


  handleclick(type){
    return (e) => {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
      if (type === 'pin') {
        this.setState({component: 'pinsUserContainer'});
      }
      else {
        this.setState({component: 'boardIndexContainer'});
      }
    };
  }

  render(){
    const components = {
      'pinsUserContainer': <PinsUserContainer />,
      'boardIndexContainer': <BoardIndexContainer />
    };
    const { firstname, lastname, username, imageUrl } = this.props.user;
    const chosenComponent = this.state.component;
    return (
      <div className='profile-outer'>
        <div className='profile-upper'>
          <div className='profile-name'>
            {firstname ?
            <h2>
            {`${firstname} ${lastname}`}
          </h2> : <h2>{`${username} Love`}</h2>}

          </div>
          <div className='profile-image-outer'>
            {imageUrl ?
            <img src={imageUrl} /> :
            <img
              className='profile-image'
              src='https://source.unsplash.com/user/yiwen0316'/>}
          </div>
        </div>
        <div className='profile-btns'>
        <ul className='profile-list'>
          <li><button className={this.state.active ? 'board-button' : 'active'} onClick={this.handleclick('board')}>Boards</button></li>
          <li><button className={this.state.active ? 'active' : 'pin-button'} onClick={this.handleclick('pin')}>Pins</button></li>
        </ul>
        </div>
        <div className='component'>
          {components[chosenComponent]}
        </div>
      </div>
    );
  }
}

export default UserShow;
