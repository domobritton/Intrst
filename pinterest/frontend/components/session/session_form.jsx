import React from 'react';
import { withRouter } from 'react-router';
import Masonry from '../masonry/masonry';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.loginHelper = this.loginHelper.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.currentTarget.value});
  }

  updateEmail(e) {
    this.setState({email: e.currentTarget.value});
  }

  updatePassword(e) {
    this.setState({password: e.currentTarget.value});
  }

  errorsMessage() {
    if (this.props.errors === 'undefined') {
      return null;
    }

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
    this.props.processForm(user).then(()=>this.props.history.push('/'));
  }

  handleGuest(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.guest(user);
  }

  guestLogin() {
    const username = 'Guest'.split('');
    const email = 'guest@guest.com'.split('');
    const password = 'Aacademy'.split('');
    const button = document.getElementById('login');
    this.setState({username: '', email: '', password: ''}, () => (
      this.loginHelper(username, email, password, button)
    ));
  }

  loginHelper(username, email, password, button) {
    if (username.length > 0) {
      this.setState({username: this.state.username + username.shift()}, () => {
        window.setTimeout(() => this.loginHelper(username, email, password, button), 75);
      });
    } else if (email.length > 0) {
      this.setState({email: this.state.email + email.shift()}, () => {
        window.setTimeout(() => this.loginHelper(username, email, password, button), 75);
      });
    } else if (password.length > 0) {
      this.setState({password: this.state.password + password.shift()}, () => {
        window.setTimeout(() => this.loginHelper(username, email, password, button), 100);
      });
    } else {
      button.click();
    }
  }

  render() {
    return (
      <div className='session-page'>
        <Masonry />
        <div className='login-btn'>
          {this.props.navLink}
        </div>
        <div className='session-form'>
          <img className='logo' src={window.logo} alt='logo'/>
          <h3>Welcome to Intrst</h3>
          <h4>Find new ideas to try</h4>
          <form
            className='inner-form'
            onSubmit={this.handleSubmit}>
            <div className='input-fields'>
              <input
                type='text'
                placeholder='Username'
                onChange={this.updateUsername.bind(this)}
                value={this.state.username}>
              </input>
              <br />
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
              type='submit'
              value={this.props.formType}>
            </input>
            <br />
            </div>
          </form>
          <form>
            <div className='submit-btn'>
              <input
                type='submit'
                onClick={this.guestLogin}
                value='Demo Login'>
              </input>
            </div>
            <button
              id='login'
              type='button' onClick={this.handleGuest}>
            </button>
          </form>
          <div className="errors">{this.errorsMessage()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
