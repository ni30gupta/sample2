import { Button, Form } from "react-bootstrap";
// import { Redirect, useHistory} from "react-router-dom";
import "../style/Login.css";

import React, { Component } from "react";
import Header from "../component/Header";


class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      auth: false,
    };

  }
  // history = useHistory()
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();

    if (
      this.state.userName === "nitish.gupta@gmail.com" &&
      this.state.password === "ni30"
    ) {
       this.setState({ auth: true }, () => { 
         this.props.history.push('profile')
         localStorage.setItem("auth", this.state.auth)
        });
        
    } else {
      alert("login credentials mismatched");
    }
  };

  render() {
    return (
      <>
      <Header />
      <div className="login-form">
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={this.state.userName}
              type="email"
              onChange={(e) => this.setState({ userName: e.target.value })}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
        <Button onClick={(e) => this.handleSubmit(e)} variant="primary">
          Submit
        </Button>
      </div>
      </>
    );
  }
}

export default Login;












/*

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let auth = false

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (userName === "nitish.gupta@gmail.com" && password === "ni30") {
      auth = true
      localStorage.setItem("auth", auth)
      //  return < Redirect to = "/profile" />
      e.history.push('profile')
    }
    else {
      alert("username & password combination didn't match")
    }

  };

  return (
    <div className="login-form">
      {auth ? <Redirect to="/profile" /> :
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={userName}
              type="email"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={(props) => handleSubmit(props)} variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      }
    </div>
  );
}



export default Login;

*/
