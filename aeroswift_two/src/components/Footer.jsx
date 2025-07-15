// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <div className="logo-icon">✈️</div>
              <span>AeroSwift</span>
            </Link>
            <p>Book your flights with ease and confidence. We offer the best prices and customer service in the industry.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="Instagram">i</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Support</h3>
              <ul>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Destinations</h3>
              <ul>
                <li><Link to="/flights/usa">United States</Link></li>
                <li><Link to="/flights/europe">Europe</Link></li>
                <li><Link to="/flights/asia">Asia</Link></li>
                <li><Link to="/flights/australia">Australia</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for special offers and travel tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} AeroSwift. All rights reserved.
          </div>
          <div className="payment-methods">
            <span>💳</span>
            <span>📱</span>
            <span>🏦</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;