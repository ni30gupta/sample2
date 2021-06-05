import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
      <div>
        <div className="container-fluid pt-5 justify-content-center text-center">
          <p>©Kwality Basket</p>
          <div>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/contactus"> Contact-Us</NavLink>
            <NavLink to="/return"> Return-Policy</NavLink>
          </div>
        </div>
      </div>
    );
}

export default Footer
