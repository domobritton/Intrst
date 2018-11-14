import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  SessionPage,
  Wrapper,
  Header,
  Logo,
  Welcome,
  Subtitle,
  UpperForm,
  LowerForm,
  Input,
  Submit,
  Error, 
  SignupLink, 
  Link,
  DivLine
} from "./form_style";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      width: window.innerWidth
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.loginHelper = this.loginHelper.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  updateEmail(e) {
    e.preventDefault();
    this.setState({ email: e.currentTarget.value });
  }

  updatePassword(e) {
    e.preventDefault();
    this.setState({ password: e.currentTarget.value });
  }

  errorsMessage() {
    if (this.props.errors === "undefined") {
      return;
    }
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={idx}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  handleGuest(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.guest(user);
  }

  guestLogin() {
    const email = "guest@guest.com".split("");
    const password = "Aacademy".split("");
    const button = document.getElementById("login2");
    this.setState({ email: "", password: "" }, () =>
      this.loginHelper(email, password, button)
    );
  }

  loginHelper(email, password, button) {
    if (email.length > 0) {
      this.setState({ email: this.state.email + email.shift() }, () => {
        window.setTimeout(() => this.loginHelper(email, password, button), 75);
      });
    } else if (password.length > 0) {
      this.setState(
        { password: this.state.password + password.shift() },
        () => {
          window.setTimeout(
            () => this.loginHelper(email, password, button),
            100
          );
        }
      );
    } else {
      button.click();
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 710;
    return (
      <SessionPage>
        <Wrapper>
          <Header>
            <Logo src={window.logo} alt="logo" />
            <Welcome>Log in to see more</Welcome>
            <Subtitle>Access Intrst's best ideas</Subtitle>
          </Header>
          <UpperForm onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="Email"
              onChange={this.updateEmail}
              value={this.state.email}
            />
            <br />
            <Input
              type="password"
              placeholder="Password"
              onChange={this.updatePassword}
              value={this.state.password}
            />
            <br />
            <Submit id="login" type="submit" value={this.props.formType} />
            <br />
          </UpperForm>
          <LowerForm>
            <Submit
              type="submit"
              onClick={this.guestLogin}
              value="Demo Login"
            />
            <button id="login2" type="button" onClick={this.handleGuest} />
            <br />
            <DivLine />
              <SignupLink
                onClick={() => this.props.openModal({ modal: "ShowSignup" })}
              >
                <Link>Not on Intrst yet? Sign Up</Link>
              </SignupLink>
          </LowerForm>
          <Error>
            {this.errorsMessage()}
          </Error>
        </Wrapper>
      </SessionPage>
    );
  }
}

export default withRouter(LoginForm);
