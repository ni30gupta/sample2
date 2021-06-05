import React, { Component } from "react";
import Header from "../component/Header";

class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
  }
  handleChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.userName = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handleEmailChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.email = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handlePasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.password = evt.target.value;
    this.setState({ input: updatedInput });
  }
  handleConfirmPasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.confirmPassword = evt.target.value;
    this.setState({ input: updatedInput });
  }
  render() {
    var {
      userName,
      email,

      password,
      confirmPassword,
    } = this.state.input;
    return (
      <>
      <Header/>
        <div className="container padding-bottom-3x mb-2 mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="forgot">
                <h2>Forgot your password?</h2>
                <p>
                  Change your password in three easy steps. This will help you
                  to secure your password!
                </p>
                <ol className="list-unstyled">
                  <li>
                    <span className="text-primary text-medium">1. </span>Enter
                    your details below.
                  </li>
                  <li>
                    <span className="text-primary text-medium">2. </span>Our
                    system will send you a temporary link
                  </li>
                  <li>
                    <span className="text-primary text-medium">3. </span>Use the
                    link to reset your password
                  </li>
                </ol>
              </div>
              <form className="needs-validation" novalidate>
                <div className="form-row mt-3">
                  <div className="col-md-6 mb-3 ">
                    <label for="validationCustom01">User Name</label>{" "}
                    <input
                      type="text"
                      className="form-control main2"
                      id="validationCustom01"
                      value={userName}
                      onChange={this.handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your registered User name!
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom02">E-mail address</label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      value={email}
                      onChange={this.handleEmailChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your registered User name!
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom03">Password</label>{" "}
                    <input
                      type="password"
                      className="form-control"
                      id="validationCustom03"
                      aria-describedby="passwordHelpInline"
                      value={password}
                      onChange={this.handlePasswordChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a password.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom03">Confirm Password</label>{" "}
                    <input
                      type="password"
                      className="form-control"
                      id="validationCustom03"
                      aria-describedby="passwordHelpInline"
                      value={confirmPassword}
                      onChange={this.handleConfirmPasswordChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a password.
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-around">
                <button className="btn btn-success" type="submit">
                  Get New Password
                </button>
                <a className="btn btn-danger" href="login.html" type="submit">
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Forgetpassword;
