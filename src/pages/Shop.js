// import React, { useState } from 'react'
// import Header from "../component/Header";
// import SideBar from "../component/SideBar";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { listOfCategories } from "../JsonData";
import Product from "../component/Product";
import "../style/ProductCategory.css";
import { productsData } from "../component/productData";
import Header from "../component/Header";
import "../style/Shop.css"

function Cart() {
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <div className="container-fluid m-4">
          <h2> Feed your family the best -> { }</h2>
        </div>

        <div className="row mt-5">
          <div className="sidebar col-xl-2  pl-5   ">
            <h3>Category</h3>
            {listOfCategories.map((category) => {
              return (
                <Nav.Link>
                  <NavLink
                    style={{ color: "Black", fontSize: "1.2rem" }}
                    to={category.name}
                  >
                    {category.name}
                  </NavLink>
                </Nav.Link>
              );
            })}
          </div>
          <div style={{ backgroundColor: "#d5f0d5", borderRadius: "20px" }} className="products my-auto mx-auto col-xl-9 d-flex flex-wrap justify-content-around p-5 ">
            {productsData.map((product) => {
              const { imgUrl, name, price } = product;
              return <Product name={name} imgURL={imgUrl} price={price} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
