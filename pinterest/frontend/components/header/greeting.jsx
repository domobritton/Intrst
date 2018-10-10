import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const sessionLinks = () => (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    );

    const welcomeMessage = () => (
      <div>
          <h1>Welcome {currentUser.username}</h1>
          <button onClick={logout}>Log Out</button>
      </div>
    );

    return currentUser ? welcomeMessage() : sessionLinks();
};

export default Greeting;
