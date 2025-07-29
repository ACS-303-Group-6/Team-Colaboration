// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import SearchForm from 'components/SearchForm';

const heroImages = [
  {
    src: "/pexels-ahmedmuntasir-912050.jpg",
    alt: "Aerial view of an airplane wing above the clouds"
  },
  {
    src: "/pexels-pixabay-268415.jpg",
    alt: "Airplane taking off from a runway at sunset"
  }
];

const HeroSection = ({ onSearchSubmit }) => {
  return (
    <div className="position-relative bg-primary text-white py-5 py-md-5 overflow-hidden">
      <Carousel controls={false} indicators={false} className="position-absolute inset-0 opacity-10">
        {heroImages.map((image, index) => (
          <Carousel.Item key={index} interval={5000}>
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img
                src={image.src}
                className="d-block w-100 h-100 object-cover"
                alt={image.alt}
                style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container text-center position-relative z-1">
        <h1 className="display-4 display-md-2 fw-bolder mb-4 animate-fade-in-down">
          Your Journey Starts Here
        </h1>
        <p className="lead max-w-3xl mx-auto mb-5 opacity-90 animate-fade-in-up">
          Discover the best flight deals and book your next adventure with AeroSwift.
          Seamless booking, unbeatable prices, and world-class service.
        </p>
        <div className="max-w-4xl mx-auto bg-white p-4 p-md-5 rounded-3 shadow-lg animate-scale-in">
          <SearchForm onSubmit={onSearchSubmit} />
        </div>
        <div className="mt-4">
          <Link
            to="/booking"
            className="btn btn-light btn-lg rounded-pill shadow-lg hover-scale animate-bounce-once"
          >
            Go to Booking Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;