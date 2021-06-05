import React from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style/test.css";

function Test() {
  return (
    <div className = "header">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Navbar.Brand href="#home">Kwality-Basket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Form inline >
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 custom-input"
                />
              </Form>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CART
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Test;
