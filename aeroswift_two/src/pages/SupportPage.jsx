// src/pages/SupportPage.jsx
import React, { useState } from 'react';
import { FaHeadset, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuestionCircle, FaSearch, FaChevronDown, FaStar } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedItems, setExpandedItems] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // FAQ data
  const faqCategories = [
    {
      id: 'booking',
      title: 'Booking & Reservations',
      questions: [
        {
          id: 'q1',
          question: 'How do I book a flight?',
          answer: 'Booking a flight with AeroSwift is simple! Visit our homepage, enter your departure and destination cities, select your travel dates, choose the number of passengers, and click "Search Flights". Browse the available options and select the flight that best suits your needs.'
        },
        {
          id: 'q2',
          question: 'Can I change or cancel my booking?',
          answer: 'Yes, you can change or cancel your booking. Log in to your AeroSwift account, go to "My Trips", and select the booking you wish to modify. Depending on your fare type, changes may be subject to fees. Please review our cancellation policy for specific details.'
        },
        {
          id: 'q3',
          question: 'How do I add extra baggage to my booking?',
          answer: 'You can add extra baggage during the booking process or after booking by visiting "My Trips". Additional baggage fees apply and vary based on your route and airline.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payments & Refunds',
      questions: [
        {
          id: 'q4',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Some airlines may also offer alternative payment options during checkout.'
        },
        {
          id: 'q5',
          question: 'How long do refunds take to process?',
          answer: 'Refunds typically take 7-10 business days to appear on your original payment method. The exact timing depends on your bank or payment provider.'
        }
      ]
    },
    {
      id: 'checkin',
      title: 'Check-in & Boarding',
      questions: [
        {
          id: 'q6',
          question: 'When can I check in for my flight?',
          answer: 'Online check-in opens 24 hours before your scheduled departure time and closes 1 hour before departure. You can check in through our website or mobile app.'
        },
        {
          id: 'q7',
          question: 'What documents do I need to board my flight?',
          answer: 'You will need a valid government-issued photo ID and your boarding pass. For international flights, you will also need a valid passport and any required visas.'
        }
      ]
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: <FaPhone className="text-blue-500 text-2xl" />,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      details: '+1 (800) 123-4567',
      action: 'Call Now'
    },
    {
      icon: <BiMessageDetail className="text-green-500 text-2xl" />,
      title: 'Live Chat',
      description: 'Get instant help from our agents',
      details: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: <FaEnvelope className="text-purple-500 text-2xl" />,
      title: 'Email Us',
      description: 'Send us your questions and concerns',
      details: 'support@aeroswift.com',
      action: 'Send Email'
    }
  ];

  // Toggle FAQ item expansion
  const toggleFAQItem = (categoryId, questionId) => {
    setExpandedItems(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === questionId ? null : questionId
    }));
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent! Our support team will contact you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeadset className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              We're here to assist you with any questions or concerns about your flights, bookings, or travel plans.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search our help center..."
                  className="w-full pl-12 pr-4 py-3 rounded-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-6">{method.details}</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Support Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-4 font-medium text-lg ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                onClick={() => setActiveTab('faq')}
              >
                <FaQuestionCircle className="inline-block mr-2" />
                FAQs
              </button>
              <button
                className={`px-6 py-4 font-medium text-lg ${activeTab === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                onClick={() => setActiveTab('contact')}
              >
                <BiMessageDetail className="inline-block mr-2" />
                Contact Support
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* FAQ Content */}
            {activeTab === 'faq' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
                
                {faqCategories.map((category) => (
                  <div key={category.id} className="mb-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">{category.title}</h3>
                    
                    <div className="space-y-4">
                      {category.questions.map((question) => (
                        <div 
                          key={question.id} 
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            className="w-full text-left p-5 bg-gray-50 hover:bg-blue-50 transition-colors duration-300 flex justify-between items-center"
                            onClick={() => toggleFAQItem(category.id, question.id)}
                          >
                            <span className="font-medium text-gray-800">{question.question}</span>
                            <span className={`transform transition-transform duration-300 ${expandedItems[category.id] === question.id ? 'rotate-180' : ''}`}>
                              <FaChevronDown className="text-blue-600" />
                            </span>
                          </button>
                          
                          {expandedItems[category.id] === question.id && (
                            <div className="p-5 bg-white border-t border-gray-100">
                              <p className="text-gray-600">{question.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Support Team</h2>
                <p className="text-gray-600 mb-8">
                  Have a question or need assistance? Fill out the form below and our support team will get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Additional Support Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Support Hours */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <FaClock className="text-blue-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Support Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">8:00 AM - 10:00 PM (EST)</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <span className="text-gray-600">Saturday - Sunday</span>
                <span className="font-medium">9:00 AM - 8:00 PM (EST)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Holidays</span>
                <span className="font-medium">10:00 AM - 6:00 PM (EST)</span>
              </div>
            </div>
          </div>

          {/* Corporate Office */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Corporate Office</h3>
            </div>
            <div className="text-gray-600 space-y-3">
              <p className="font-medium">AeroSwift Headquarters</p>
              <p>123 Aviation Avenue</p>
              <p>Suite 500</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
          </div>

          {/* Support Resources */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                <FaHeadset className="text-blue-500 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Support Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Booking Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Baggage Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Check-in Procedures
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Travel Requirements
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <FaQuestionCircle className="mr-2" />
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "AeroSwift made booking my international flight so easy. Their customer support was incredibly helpful when I needed to make changes to my itinerary."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Frequent Flyer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The support team resolved my baggage issue within minutes. I'm impressed with their efficiency and professionalism!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Michael Chen</p>
                  <p className="text-gray-500 text-sm">Business Traveler</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I've used many booking platforms, but AeroSwift stands out with their 24/7 support. They helped me rebook a flight at 3 AM!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Priya Sharma</p>
                  <p className="text-gray-500 text-sm">Family Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mr-4">
                  <BiMessageDetail className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Need Immediate Assistance?</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Our live chat agents are available 24/7 to help you with any urgent questions or issues.
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Start Live Chat Now
              </button>
            </div>
            <div className="md:w-1/3 hidden md:block">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;