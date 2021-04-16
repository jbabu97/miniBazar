import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../photos/sewingLogo.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <Link className="nav-link mr-4 active" aria-current="page" to="/home">
          <img src={Logo} alt=""/>
        </Link>
        <Link to="/login">
          <button className="btn btn-success">Login</button>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link mr-4 active"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4" to="/patientsList">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4 " to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-4" to="/dashboard">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
