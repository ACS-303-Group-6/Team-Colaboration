// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold text-primary">AeroSwift</h5>
            <p>Your journey, our passion. Book flights with ease and confidence across the globe.</p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Quick Links</h5>
            <p><Link to="/about" className="text-white text-decoration-none">About</Link></p>
            <p><Link to="/support#faqAccordion" className="text-white text-decoration-none">FAQ</Link></p>
            <p><Link to="/terms" className="text-white text-decoration-none">Terms of Service</Link></p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold">Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-3 fs-4" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" className="text-white me-3 fs-4" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-white fs-4" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center mb-0">© {new Date().getFullYear()} AeroSwift. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;