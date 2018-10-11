import React from 'react';
import { withRouter } from "react-router";
import Masonry from '../masonry/masonry';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.loginHelper = this.loginHelper.bind(this);
  }

  updateEmail(e) {
    this.setState({email: e.currentTarget.value});
  }

  updatePassword(e) {
    this.setState({password: e.currentTarget.value});
  }

  errorsMessage() {
    return (
      <ul>
      {this.props.errors.map((error, idx) => {
           return <li key={idx}>{error}</li>;
      })}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  guestLogin() {
    const email = 'guest@guest.com'.split('');
    const password = 'Aacademy'.split('');
    const button = document.getElementById('login');
    this.setState({email: '', password: ''}, () => (
      this.loginHelper(email, password, button)
    ));
  }

  loginHelper(email, password, button) {
    if (email.length > 0) {
      this.setState({email: this.state.email + email.shift()}, () => {
        window.setTimeout(() => this.loginHelper(email, password, button), 75);
      });
    } else if(password.length > 0) {
      this.setState({password: this.state.password + password.shift()}, () => {
        window.setTimeout(() => this.loginHelper(email, password, button), 100);
      });
    } else {
      button.click();
    }
  }

  render() {
    return (
      <div className='session-page'>
        <Masonry />
        <div className='session-form'>
          <img className='logo' src={window.logo} alt='logo'/>
          <h3>Log in to see more</h3>
          <h4>Access Intrst's best ideas</h4>
          <p>{this.errorsMessage}</p>
          <form
            className='inner-form'
            onSubmit={this.handleSubmit}>
            <div className='input-fields'>
              <input
                type='text'
                placeholder='Email'
                onChange={this.updateEmail.bind(this)}
                value={this.state.email}>
              </input>
              <br />
              <input
                type='password'
                placeholder='Password'
                onChange={this.updatePassword.bind(this)}
                value={this.state.password}>
              </input>
              <br />
            </div>
            <div className='submit-btn'>
            <input
              id='login'
              type='submit'
              value={this.props.formType}>
            </input>
            <br />
            <input
              type='submit'
              onClick={this.guestLogin}
              value='Demo Login'>
            </input>
            <br />
              <div className='div-line'></div>
              <div className='signup-link'>
                {this.props.navLink}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

// https://source.unsplash.com/random
