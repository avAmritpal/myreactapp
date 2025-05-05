import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Use Link for routing
// import logohome from '../../public/images';

const Footer = () => {
  return (
<footer className="bg-light text-center text-lg-start">
  <div className="container p-4">
    <div className="row">

      <div className="col-md-5 ">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/privacy-policy.html" className="text-dark">Privacy Policy</a></li>
          <li><a href="/terms.html" className="text-dark">Terms of Service</a></li>
          <li><a href="/contact.html" className="text-dark">Contact Us</a></li>
        </ul>
      </div>

      <div className="col-md-2 ">
      <Link className="nav-link" to="/"><img className="log-ft" src="images/logohome.png" /></Link>
       </div>


      <div className="col-md-5">
        <h5 className="text-uppercase text-right">Follow Us</h5>
        <ul className="list-unstyled">
          <li><a href="https://facebook.com" className="text-dark" target="_blank" rel="noopener noreferrer text-right">Facebook</a></li>
          <li><a href="https://twitter.com" className="text-dark" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" className="text-dark" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2024 Your Company Name. All rights reserved.
  </div>
</footer>


  );
};

export default Footer;