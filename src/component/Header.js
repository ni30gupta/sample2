import React, { useContext } from "react";
import logo from "../media/kwalitybasketlogo.jpeg";
import { NavLink } from "react-router-dom";
import { listOfCategories } from "../JsonData";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ShoppingCartOutlinedIcon } from '@material-ui/icons';
import "../style/Header.css";
import { cartContext } from "./CartContext";




function Header(props) {
  const [Cart, setCart] = useContext(cartContext);
  // const isAuth = localStorage.getItem("auth");
  const isAuth = true;
  return (
    <div className="navbar-div" style={{ paddingBottom: "20vh" }} >
      <Navbar
        className="  "
        collapseOnSelect
        expand="sm"
        bg="success"
        variant="dark"
        Sticky="top"
        fixed="top"
      >
        <Navbar.Brand>
          <NavLink to="/">
            <span>
              <img style={{ width: "35px" }} src={logo} alt="" />{" "}
            </span>
            Kwality-Basket
          </NavLink>
        </Navbar.Brand>

        <NavDropdown title="Category" id="collasible-nav-dropdown">
          {listOfCategories.map((item, key) => {
            return (
              <NavDropdown.Item key={key} href={`/${item.name}`}>

                {item.name}

              </NavDropdown.Item>
            );
          })}
        </NavDropdown>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="bg-success" >
          <Nav className="mr-auto  ">
            {!isAuth ? (
              <>
                <Nav.Link>
                  <NavLink to="/login">Login </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/signup">SignUp </NavLink>
                </Nav.Link>{" "}
              </>
            ) : (
              <>
                <NavDropdown title="Nitish" id="collasible-nav-dropdown">
                  <NavDropdown.Item >
                    <Nav.Link >
                      <NavLink variant="dark" to="/profile">My Profile </NavLink>
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <Nav.Link >
                      <NavLink variant="dark" to="/orders">My Orders </NavLink>
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item   >
                    <Nav.Link>
                      <NavLink to="/logout">Log Out </NavLink>
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>

        </Navbar.Collapse>

        <div className="media-below">
          <Nav >
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                style={{
                  width: "20rem"
                }}
              // className="mr-sm-2 "
              />
            </Form>
          </Nav>
          <Nav  >
            <NavLink to="/cart">
              <button
                className="btn btn-danger my-2 my-sm-0 d-flex flex-row-"
                type="submit"
                style={{ color: "white" }}

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                <span
                  id="cart"
                  className="px-1"
                  style={{ color: "white" }}
                >{Cart.length}</span>{" "}

              </button>
            </NavLink>
          </Nav>
        </div>
      </Navbar >
    </div >
  );
}

export default Header;
