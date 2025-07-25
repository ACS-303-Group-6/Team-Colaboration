// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer bg-[#2c3e50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="footer-brand">
            <Link to="/" className="logo flex items-center mb-4">
              <div className="logo-icon text-2xl mr-2">✈️</div>
              <span className="text-xl font-bold">AeroSwift</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Book your flights with ease and confidence. We offer the best prices and customer service in the industry.
            </p>
            <div className="social-links flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  aria-label={social}
                  className="w-10 h-10 bg-[#3a506b] rounded-full flex items-center justify-center hover:bg-[#FF5A5F] transition-colors"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="link-group">
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FF5A5F]">Company</h3>
              <ul>
                {['About Us', 'Careers', 'Press', 'Blog'].map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="link-group">
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FF5A5F]">Support</h3>
              <ul>
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="link-group">
              <h3 className="text-lg font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#FF5A5F]">Destinations</h3>
              <ul>
                {['United States', 'Europe', 'Asia', 'Australia'].map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link to={`/flights/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="footer-newsletter">
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers and travel tips.
            </p>
            <form className="newsletter-form flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button 
                type="submit"
                className="bg-[#FF5A5F] hover:bg-[#E54E54] text-white font-bold px-6 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="copyright text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AeroSwift. All rights reserved.
          </div>
          <div className="payment-methods flex gap-3 text-xl">
            {['💳', '📱', '🏦'].map((icon, index) => (
              <span key={index}>{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;