import React from 'react';
import { withRouter } from "react-router";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className='session-page'>
        <div className='login-btn'>
          {this.props.navLink}
        </div>
        <div className='session-form'>
          <img className='logo' src={window.logo} alt='logo'/>
          <h3>Welcome to Intrst</h3>
          <h4>Find new ideas to try</h4>
          <p>{this.errorsMessage}</p>
          <form
            className='inner-form'
            onSubmit={this.handleSubmit}>
            <div className='input-fields'>
              <input
                type='text'
                placeholder='Username'
                onChange={this.updateUsername.bind(this)}>
              </input>
              <br />
              <input
                type='text'
                placeholder='Email'
                onChange={this.updateEmail.bind(this)}>
              </input>
              <br />
              <input
                type='password'
                placeholder='Password'
                onChange={this.updatePassword.bind(this)}>
              </input>
              <br />
            </div>
            <div className='submit-btn'>
            <input
              type='submit'
              value='Continue'>
            </input>
            <br />
            <input
              type='submit'
              onClick=''
              value='Demo Login'>
            </input>
            <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
