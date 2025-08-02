// src/pages/SupportPage.jsx
import React, { useState } from 'react';
import { FaQuestionCircle, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';

const faqs = [
  {
    question: 'How do I book a flight?',
    answer: 'You can book a flight by using the search form on our homepage. Enter your departure and destination cities, travel dates, and number of passengers, then click "Search". You will be shown a list of available flights. Choose your preferred flight and follow the on-screen instructions to complete your booking.',
  },
  {
    question: 'Can I change or cancel my booking?',
    answer: 'Yes, you can manage your booking through the "My Dashboard" section after logging in. Please note that changes and cancellations are subject to the airline\'s policy and may incur fees. For immediate assistance, please contact our support team.',
  },
  {
    question: 'What is the baggage allowance?',
    answer: 'Baggage allowance varies by airline and ticket type. The specific details for your flight will be mentioned during the booking process and in your confirmation email. You can also find this information on the airline\'s website.',
  },
  {
    question: 'How do I check-in online?',
    answer: 'Online check-in is typically available 24-48 hours before your flight\'s departure. You can check-in through the airline\'s website using your booking reference number. This will allow you to select your seat and get your boarding pass in advance.',
  },
];

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/support/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Thank you for your message! Our support team will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your connection and try again.');
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Support & Help Center</h1>
        <p className="lead text-secondary">We're here to help you with any questions or issues.</p>
      </div>

      <div className="row g-5">
        {/* FAQ Section */}
        <div className="col-lg-7">
          <h2 className="fw-bold mb-4"><FaQuestionCircle className="me-2 text-primary" />Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${openFaq !== index ? 'collapsed' : ''}`}
                    type="button"
                    onClick={() => handleFaqToggle(index)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-lg-5">
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title fw-bold">Get in Touch</h5>
              <p className="card-text text-secondary">For urgent issues, please use the contact details below.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><FaPhone className="me-2 text-primary" /> +1 (800) 123-4567</li>
                <li><FaEnvelope className="me-2 text-primary" /> support@aeroswift.com</li>
              </ul>
              <button className="btn btn-success w-100 mt-2">
                <FaComments className="me-2" /> Live Chat
              </button>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Send us a Message</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required /></div>
                <div className="mb-3"><label htmlFor="email" className="form-label">Email</label><input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required /></div>
                <div className="mb-3"><label htmlFor="subject" className="form-label">Subject</label><input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required /></div>
                <div className="mb-3"><label htmlFor="message" className="form-label">Message</label><textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea></div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;