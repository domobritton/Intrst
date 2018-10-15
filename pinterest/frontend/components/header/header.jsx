import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session/signup_form_container';
import Menu from './header_items';

const Header = ({currentUser, logout}) => {
    const sessionLinks = () => (
      <div>
        <SignupFormContainer />
      </div>
    );

    const nav = () => (
      <div className='header'>
        <div className='logo-outer'>
        <Link to="/">
          <img className='nav-logo' src={window.logo} alt='Intrst logo'/>
        </Link>
        </div>
        <div className='search'>
        <span className='fa fa-search'></span>
        <input
          type='text'
          placeholder='Search'>
        </input>
      </div>
        <Menu currentUser={currentUser} logout={logout}/>
      </div>
    );

    return currentUser ? nav() : sessionLinks();
};

export default Header;
