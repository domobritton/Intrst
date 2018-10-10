import React from 'react';
import { withRouter } from "react-router";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
              value={this.props.formType}>
            </input>
            <br />
            <input
              type='submit'
              onClick=''
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
