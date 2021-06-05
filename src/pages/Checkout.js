// import { extend } from "jquery";
import React, { Component } from "react";
import Header from "../component/Header";


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddressVisible: false,
    };

    // this.addNewAddress = this.addNewAddress.bind(this);
  }
  addNewAddress = () => {
    this.setState({ isAddressVisible: true });
  };

  render() {
    return (
      <>
      <Header/>
        <div className="container">
          <div className="py-5 text-center">
            <h2>Checkout form</h2>
            <p className="lead"></p>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>{" "}
                <span className="badge badge-secondary badge-pill">
                  {/* ${cartList.size()} */}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {/* <c:forEach items="${cart.products}" var="cart"> */}
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">
                      {/* ${cart.productName}(${cart.quantity}) */}
                    </h6>
                    <small className="text-muted">
                      {/* ${cart.description} */}
                    </small>
                  </div>{" "}
                  <span className="text-muted">
                    &#x20B9;
                    {/* ${cart.price} */}
                  </span>
                </li>
                {/* </c:forEach> */}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (&#x20B9;)</span>{" "}
                  <strong>
                    &#x20B9;
                    {/* ${cart.totalAmount} */}
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1" id="addresses">
              <h4 className="mb-3">Shipping address</h4>
              {/* <c:forEach items="${addressList}" var="address"> */}
              <div className="form">
                <div className="custom-radio mb-2 mr-sm-2 ml-2 d-flex justify-content-around">
                  <input
                    type="radio"
                    name="addressRadio"
                    className="custom-control-input"
                    id="${address.id}"
                    value="${address.id}"
                    checked="${addressList.size() == 1}"
                  />
                  <label className="custom-control-label" for="customRadio1">
                    {/* ${address.name}${address.phoneNo} */}
                  </label>
                  <button
                    type="submit"
                    className="btn btn-success btn-sm"
                    onclick="selectAddress(${address.id})"
                  >
                    Use this address
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger btn-sm"
                    onclick="deleteAddress(${address.id})"
                  >
                    Delete
                  </button>
                </div>
                <div className="row d-flex justify-content-start ml-5 mt-4">
                  {/* ${address.address} ${address.city} ${address.state} */}
                </div>
              </div>
              {/* </c:forEach> */}

              <button
                type="button"
                id="newAddressBtn"
                className="btn btn-secondary my-3 ml-md-5"
                onClick={this.addNewAddress}
              >
                + Add new address
              </button>

              <form
                id="adressForm"
                name="adressForm"
                className="needs-validation"
                style={{
                  display: this.state.isAddressVisible ? "block" : "none",
                }}
                novalidate
              >
                <h4 className="mb-3">Add new address</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">Full name</label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Contact-Number</label>{" "}
                    <input
                      type="text"
                      name="phoneNo"
                      data-validation="number"
                      data-validation-allowing="negative,number"
                      input
                      name="color"
                      data-validation="number"
                      datavalidation-ignore="$"
                      required="required"
                      className="form-control"
                      id="phoneNo"
                      placeholder="Contact Number"
                      maxlength="10"
                      pattern="\d*"
                    />
                    <div className="invalid-feedback">
                      Valid mobile number is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="email">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    rows="2"
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="landmark">
                    Landmark <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="landmark"
                    name="landMark"
                    placeholder="Near to..."
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">State</label>{" "}
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      name="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Himachal</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">City</label>{" "}
                    <select
                      className="custom-select d-block w-100"
                      id="city"
                      name="city"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>Dharamshala</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>{" "}
                    <input
                      type="text"
                      className="form-control"
                      id="pinCode"
                      name="pinCode"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block my-5"
                    onclick="saveAddress(); return false;"
                    style={{ float: "right" }}
                  >
                    Save and Continue
                  </button>
                </div>
              </form>
              <div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      checked
                      required
                    />{" "}
                    <label className="custom-control-label" for="credit">
                      Cash on delivery
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                  </div>
                </div>

                <hr className="mb-4" />
                <form
                  id="orderForm"
                  name="orderForm"
                  action="${pageContext.request.contextPath}/complete/order"
                  method="post"
                >
                  <input
                    type="hidden"
                    id="orderIds"
                    name="orderIds"
                    value="${orderIds}"
                  />{" "}
                  <input
                    type="hidden"
                    id="addressId"
                    name="addressId"
                    id="addressId"
                    value="${addressId}"
                  />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onclick="setAddressId();"
                    // ${ cart.products.size() == 0 && addressId == null  ? 'disabled="disabled"' : ''}
                  >
                    Continue to checkout
                    {/* ${addressId}{" "} */}
                  </button>
                </form>
              </div>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;
