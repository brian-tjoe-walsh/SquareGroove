// src/components/session/login_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  // Once the user has been authenticated, redirect to the main page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors});
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin() {
    let email = "demo@email.com".split('');
    let password = "password".split('');
    this.setState({ email: "", password: "" }, () => this.loginGuest(email, password));
  }

  loginGuest(email, password) {
    if (email.length > 0) {
      this.setState({ email: [this.state.email] + email.shift() }, 
        () => setTimeout(() => this.loginGuest(email, password), 25));
    } else if (password.length > 0) {
      this.setState({ password: [this.state.password] + password.shift() }, 
        () => setTimeout(() => this.loginGuest(email, password), 25));
    } else {
      return this.handleSubmit();
    }
  }

  // Handle form submission
  handleSubmit(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then(() => this.props.closeModal());
  }

  handleClickEmail() {
    let emailInput = $('.loginInputEmail');
    emailInput.addClass('inputTransform');
  }

  handleClickPassword() {
    let passwordInput = $('.loginInputPassword');
    passwordInput.attr('id', "inputTransform");
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="loginForm">
        Please Login or&nbsp;
        {this.props.otherForm}
        <form onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.email}
                onClick={this.handleClickEmail}
                onChange={this.update('email')}
                placeholder="Email"
                className="loginInputEmail"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onClick={this.handleClickPassword}
                onChange={this.update('password')}
                placeholder="Password"
                className="loginInputPassword"
              />
            <br/>
            <div className="loginButtons">
              <input type="submit" className="submit-btn-login" value="Login" />
              <input type="button" className="submit-btn-demo-login" value="Demo Login"
                    onClick={this.handleDemoLogin}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);