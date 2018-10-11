import React from 'react';
import GreetingContainer from './header/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
      <div>
        <Switch>
          <Route exact path='/' component={GreetingContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <ProtectedRoute path='/' component={SignupFormContainer} />
        </Switch>
      </div>
  );
};

export default App;
