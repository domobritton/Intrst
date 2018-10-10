import React from 'react';
import { withRouter } from "react-router";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      {this.props.errors.map(er => {
           return <li>{er}</li>;
      })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <h3>Welcome to Intrst</h3>
        <h4>Find new ideas to try</h4>
        <form onSubmit={this.handleSubmit}>
          {this.errorsMessage}
          <input
            type='text'
            placeholder='Username'
            onChange={this.updateEmail.bind(this)}>
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
          <input
            type='submit'
            value={this.props.formType}>
          </input>
          <br />
          {this.props.navLink}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
