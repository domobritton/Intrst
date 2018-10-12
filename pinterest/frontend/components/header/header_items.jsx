import React from 'react';
import {Link} from 'react-router-dom';

const Menu = ({currentUser, logout}) => {
  return (
    <div className='links'>
      <div className='btn'>
        <Link to='/'>Home</Link>
      </div>
      <div className='btn'>
        <Link to='/following'>Following</Link>
      </div>
      <div className='btn'>
        <Link to={`/user/${currentUser.id}`}>
          <div className='header-user'>
            {
              (currentUser.image_url === null)
              ? <div className='img-user'>
              <i className='fas fa-user'></i>
            </div>
            :
            <div className='profile-nav'>
              <img src={currentUser.image_url}/>
            </div>
          }
          <div className='profile-nav'>
            {
              currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
            }
          </div>
        </div>
      </Link>
      </div>
      <div className='btn'>
        <button
          className='logout'
          onClick={logout}>Log Out</button>
      </div>
  </div>);
};

export default Menu;
