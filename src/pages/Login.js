import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../component/Header";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { userName: "", password: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.userName = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  handlePasswordChange(evt) {
    var updatedInput = this.state.input;
    updatedInput.password = evt.target.value;
    console.log(this.state);
    this.setState({ input: updatedInput });
  }
  render() {
    var { userName, password } = this.state.input;
    return (
      <>
        <Header />
        <div className="container row mx-auto d-flex justify-content-around">
          <form classNameName="form-signin  col col-lg-8 col-xl-8 col-sm-11 col-xs-11 " method="POST">
            <h1 className="h3 font-weight-normal mt-5">Please sign in</h1>
            <label for="inputEmail" className="sr-only">
              Email address
            </label>{" "}
            <input
              type="userName"
              id="inputEmail"
              name="username"
              className="form-control mb-3"
              value={userName}
              onChange={this.handleChange}
              placeholder="User name/Email address"
              required
              autofocus
            />
            <label for="inputPassword" className="sr-only">
              Password
            </label>{" "}
            <input
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              value={password}
              onChange={this.handlePasswordChange}
              placeholder="Password"
              required
            />
            <div>
              <label classNameName="mb-2">
                <a href={"Forgetpassword"}>Forget password ?</a>
              </label>
            </div>
            <button
              className="d-grid gap-2 col-6 mx-auto btn btn-outline-danger"
              type="submit"
            >
              Sign in
            </button>
            <div className="mt-3">
              <label>
                <a href={"Signup "}>New to kwality Basket? click to Sign-up </a>
              </label>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
