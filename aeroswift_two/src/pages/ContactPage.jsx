// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch('/api/support/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Good practice to keep this consistent
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Reset form after a success message is shown
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
      } else {
        setErrors({ api: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setErrors({ api: 'An error occurred. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
        <p className="lead text-secondary">
          We're here to help. Get in touch with our team anytime.
        </p>
      </div>
      
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card shadow-lg p-4 h-100">
            <div className="card-body">
              <h2 className="h3 fw-bold mb-4">Get in Touch</h2>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0 me-3">
                  <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <FaMapMarkerAlt size="1.25em" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 fw-semibold mb-1">Headquarters</h3>
                  <p className="text-secondary mb-0">123 Aviation Way, New York, NY 10001, USA</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0 me-3">
                  <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <FaPhone size="1.25em" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 fw-semibold mb-1">Phone</h3>
                  <p className="text-secondary mb-0">+1 (800) 555-FLY (359)</p>
                </div>
              </div>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0 me-3">
                  <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <FaEnvelope size="1.25em" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 fw-semibold mb-1">Email</h3>
                  <p className="text-secondary mb-0">support@aeroswift.com</p>
                </div>
              </div>
              
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <FaClock size="1.25em" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 fw-semibold mb-1">Working Hours</h3>
                  <p className="text-secondary mb-0">Monday - Friday: 8AM - 10PM</p>
                  <p className="text-secondary mb-0">Saturday - Sunday: 9AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="card shadow-lg p-4">
            <div className="card-body">
            <h2 className="h3 fw-bold mb-4">Send a Message</h2>
            
              {isSubmitted ? (
                <div className="alert alert-success text-center p-4">
                  <FaCheckCircle size="3em" className="mb-3" />
                  <h4 className="alert-heading">Message Sent Successfully!</h4>
                  <p className="mb-0">Thank you for contacting us. Our team will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="John Smith" />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="john@example.com" />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`form-control ${errors.subject ? 'is-invalid' : ''}`} placeholder="How can we help?" />
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className={`form-control ${errors.message ? 'is-invalid' : ''}`} placeholder="Your message here..."></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary d-flex align-items-center" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaPaperPlane className="ms-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;