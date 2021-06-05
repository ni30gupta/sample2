// import { Button } from 'bootstrap';
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { cartContext } from "./CartContext";

export default function Product(props) {
  const [Cart, setCart] = useContext(cartContext);
  const isAuth = localStorage.getItem("auth");

  const addToCart = (product) => {
    if (isAuth) {
      setCart([...Cart, product]);
    } else {
      alert("Login First ");
    }
  };

 

  return (
    <div>
      <Card
      className = "Card-effect"
        style={{
          width: "15rem",
          marginBottom: "1.5rem",
          borderRadius: "20px"
         
        }}
      >
        <Card.Img
          className=" ml-auto mr-auto d-block"
          variant="top"
          style={{ width: "6rem" }}
          src={props.imgURL}
        />
        <Card.Body className="d-flex justify-content-between">
          <div>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              <h6>₹ {Math.round(props.price)}/-</h6>
            </Card.Text>
          </div>

          <Button
            className="btn h-25  btn-danger my-2 my-sm-0 btn2"
            type="submit"
            onClick={() => {
              addToCart(props);
            }}
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
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
