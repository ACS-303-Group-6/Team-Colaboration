// src/components/FeaturesSection.jsx
import React from 'react';
import { FaPlane, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaPlane className="text-primary fs-1" />,
    title: 'Fast Booking',
    description: 'Book your flight in under 30 seconds with our streamlined process and intuitive interface.',
  },
  {
    icon: <FaShieldAlt className="text-primary fs-1" />,
    title: 'Secure Payments',
    description: 'Your transactions are protected with bank-level security and encryption technology.',
  },
  {
    icon: <FaHeadset className="text-primary fs-1" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any issues.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="display-5 fw-bold text-center text-dark mb-5 position-relative">
          <span className="position-relative d-inline-block">
            Why Choose AeroSwift?
            <span className="position-absolute bottom-0 start-0 w-100 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {features.map((feature, index) => (
            <div className="col" key={index}>
              <div className="text-center p-4 bg-white rounded-3 shadow-lg hover-shadow hover-translate-y h-100">
                <div className="d-flex align-items-center justify-content-center mx-auto mb-4 bg-primary-subtle rounded-circle p-3" style={{ width: '96px', height: '96px' }}>
                  {feature.icon}
                </div>
                <h3 className="fs-4 fw-bold mb-3 text-dark">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;