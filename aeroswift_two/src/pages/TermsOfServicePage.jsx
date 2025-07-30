// src/pages/TermsOfServicePage.jsx
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container py-5 animate-fade-in">
      <h1 className="mb-4">Terms of Service</h1>
      <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">1. Introduction</h5>
          <p className="card-text">
            Welcome to AeroSwift. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our service, you agree to be bound by these Terms.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">2. User Responsibilities</h5>
          <p className="card-text">
            You agree to provide accurate and complete information when creating an account and booking flights. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">3. Booking and Payments</h5>
          <p className="card-text">
            All bookings are subject to availability. Prices are not guaranteed until payment is complete and tickets are issued. We accept various forms of payment as indicated on the payment page.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">4. Cancellations and Refunds</h5>
          <p className="card-text">
            Cancellation and refund policies are determined by the airline and the fare rules associated with your ticket. Please review these rules carefully before booking. Service fees may be non-refundable.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">5. Limitation of Liability</h5>
          <p className="card-text">
            AeroSwift is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our service, including but not limited to, errors, omissions, interruptions, or delays.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">6. Governing Law</h5>
          <p className="card-text">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is based, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;