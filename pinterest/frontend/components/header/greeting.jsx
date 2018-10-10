import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session/signup_form_container';

const Greeting = ({currentUser, logout}) => {

    const sessionLinks = () => (
      <div>
        <SignupFormContainer />
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
