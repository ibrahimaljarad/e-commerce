import React, { Component} from "react"
import {Link} from 'react-router-dom';
// import logo from '../logo.png'


function Navbar() {
    return (
     <>
     <div className="navbarContainer">
      <nav className= " navbar navbar-expend-sm  navbar-dark px-sm-5">
        <Link to ="/">
        <h2 className ="navbar-brand">Carwow</h2>
        </Link>
        <ul className =" navbar-nav align-item-center">
          <li className = " nav-item ml-5">
            <Link to="/" className ="nav-link">
             Our Collection
            </Link>
          </li>
          </ul>
        <Link to="/cart" className =" ml-auto">
            <button className="buttonContainer">
              <span className="mr-2">
              <i className=" fas fa-cart-plus"/>
              </span>
              My cart
            </button>
          </Link>
      </nav>
      </div>
     </>
    );
  }
  
  export default Navbar;
  