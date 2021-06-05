import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Counter from "../component/Counter";
import Header from "../component/Header";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { NavLink } from "react-router-dom";
import { cartData } from "../component/cartDatafromAPI";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      cartLength: 0,
    };

    this.deleteItem = (id) => {
      if (window.confirm("You want to delte this Item ? ")) {
        // e.target.parentNode.parentNode.parentNode.remove();
        let updatedCart = this.state.cartItems.filter((cv, ind, ar) => {
          return cv.item_id !== id
        })
        this.setState({ cartItems: [...updatedCart] }, () => {
          this.setState({ cartLength: this.state.cartItems.length })
        })

      }

    };
  }

  componentDidMount() {
    this.setState({ cartItems: cartData }, () => {
      this.setState({ cartLength: this.state.cartItems.length });
    });
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="mt-3 p-2">
            <Col className=" ml-auto  p-4 " xl={6} sm={5}>
              <div className="d-flex justify-content-between align-items-center">
                <h3>Shopping Cart</h3>
                <h6>Total Items : {this.state.cartLength}</h6>
              </div>
              <hr />

              {this.state.cartItems.map((item) => {
                return (
                  <>
                    <div
                      id={item.item_id}
                      className="d-flex justify-content-between mb-3 bg-light align-items-center "
                    >
                      <div>
                        <img style={{ width: "50px" }} src={item.img} alt="" />
                      </div>
                      <div>{item.item}</div>
                      <div>
                        <Counter qty={item.qty} price={item.price} />
                      </div>
                      <div>₹ {Math.ceil(item.amount * item.qty)}</div>
                      <div
                        onClick={(e) => {
                          this.deleteItem(item.item_id);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <AiFillDelete size="1.5rem" />
                      </div>
                    </div>
                  </>
                );
              })}
            </Col>
            <Col xl={1}></Col>
            <Col className="bg-light p-4 mr-auto" xl={3} sm={5}>
              <div className="d-flex justify-content-between align-items-center">
                <h3>Summary</h3>
                <h6></h6>
              </div>
              <hr />
              <h6>Items</h6> <br />
              <h6>Total Price</h6> <br /> <br />
              <a href={"Checkout "}>
                <Button variant="success" size="sm" block> Check out</Button>{" "}
              </a>
            </Col>
          </Row>
          <h6 style={{ paddingLeft: "10rem" }}>
            {" "}
            <NavLink to="/shop"> {" <---- Back to the Shop"}</NavLink>{" "}
          </h6>
        </Container>
      </>
    );
  }
}

export default Cart;
