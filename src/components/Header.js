import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Use Link for routing
import { useAuth } from '../services/AuthProvider';

const Header = ({ title, searchBar }) => {

const { logout ,  isLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      {/* Website title */}
      <Link className="nav-link" to="/"><img className="log-ft" src="images/logohome.png" /></Link>

      {/* Navbar toggle button for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
          </li>
          {isLoggedIn ? <li className="nav-item">
            <Link className="nav-link" onClick={logout}>Logout</Link>
          </li>: <> <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
           
          </li></>}

            <li className="nav-item">
            <Link className="nav-link" to="/userslist">Users List</Link>
              </li>

            <li className="nav-item">
            <Link className="nav-link" to="/allproducts">All Products</Link>
              </li>
              <li className="nav-item">
            <Link className="nav-link" to="/consumecalculate">ConsumeCalculate</Link>
              </li>
              
              {/* <li className="nav-item">
            <Link className="nav-link" to="/singleproduct">Single Products</Link>
              </li> */}

              </ul>

        
        {/* Conditional search bar */}
        {searchBar && (
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        )}
      </div>
    </div>
  </nav>

  );
};



export default Header;