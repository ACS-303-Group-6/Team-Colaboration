// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHeart, FaLeaf, FaPlane } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">About AeroSwift</h1>
        <p className="lead text-secondary">
          Discover our story, values, and commitment to revolutionizing air travel.
        </p>
      </div>
      
      <div className="card shadow-lg border-0 p-md-5 p-4 mb-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="h3 fw-bold mb-4">Our Story</h2>
            <p className="text-secondary mb-4">
              Founded in 2010, AeroSwift has grown from a regional carrier to one of the most trusted 
              airlines in the industry. Our mission is to connect people and cultures through seamless 
              air travel experiences.
            </p>
            <p className="text-secondary mb-4">
              With a fleet of over 120 modern aircraft and serving more than 90 destinations worldwide, 
              we're committed to safety, comfort, and environmental sustainability.
            </p>
            
            <div className="row text-center g-3">
              <div className="col">
                <div className="bg-light p-3 rounded">
                  <div className="h4 fw-bold text-primary mb-1">12M+</div>
                  <div className="small text-muted">Passengers</div>
                </div>
              </div>
              <div className="col">
                <div className="bg-light p-3 rounded">
                  <div className="h4 fw-bold text-primary mb-1">90+</div>
                  <div className="small text-muted">Destinations</div>
                </div>
              </div>
              <div className="col">
                <div className="bg-light p-3 rounded">
                  <div className="h4 fw-bold text-primary mb-1">120</div>
                  <div className="small text-muted">Aircraft</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center" style={{minHeight: '250px'}}>
              <FaPlane className="text-primary display-1 opacity-25" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Our Values</h2>
        <p className="lead text-secondary mt-3">
          These core principles guide everything we do at AeroSwift
        </p>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        <div className="col">
          <div className="card h-100 shadow-sm text-center p-4">
            <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
              <FaShieldAlt className="text-primary fs-2" />
            </div>
            <h3 className="h5 fw-bold mb-3">Safety First</h3>
            <p className="text-secondary">Our top priority is the safety and security of our passengers and crew.</p>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm text-center p-4">
            <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
              <FaHeart className="text-success fs-2" />
            </div>
            <h3 className="h5 fw-bold mb-3">Customer Focus</h3>
            <p className="text-secondary">We're dedicated to providing exceptional service at every touchpoint.</p>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-sm text-center p-4">
            <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded-circle mx-auto mb-4" style={{width: '80px', height: '80px'}}>
              <FaLeaf className="text-info-emphasis fs-2" />
            </div>
            <h3 className="h5 fw-bold mb-3">Sustainability</h3>
            <p className="text-secondary">Committed to reducing our environmental impact through innovation.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary rounded-3 p-5 text-center text-white">
        <h2 className="display-5 fw-bold mb-3">Join the AeroSwift Family</h2>
        <p className="lead mb-4 mx-auto" style={{maxWidth: '600px'}}>
          Experience the difference with our award-winning service and commitment to excellence.
        </p>
        <Link to="/search" className="btn btn-light btn-lg fw-bold px-4 rounded-pill">
          Book Your Flight
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;