// src/pages/BookingPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaPassport, FaCreditCard, FaArrowLeft } from 'react-icons/fa';

const BookingPage = ({ flights, onBooking }) => {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [passengerData, setPassengerData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    passport: '',
    seats: 1,
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const foundFlight = flights.find(f => f.id === parseInt(flightId));
    if (foundFlight) {
      setFlight(foundFlight);
    } else {
      navigate('/');
    }
  }, [flightId, flights, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerData({
      ...passengerData,
      [name]: value
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!passengerData.name) newErrors.name = 'Name is required';
    if (!passengerData.email) newErrors.email = 'Email is required';
    if (!passengerData.phone) newErrors.phone = 'Phone is required';
    if (!passengerData.dob) newErrors.dob = 'Date of birth is required';
    if (!passengerData.passport) newErrors.passport = 'Passport number is required';
    if (passengerData.seats < 1 || passengerData.seats > flight.availableSeats) 
      newErrors.seats = `Must be between 1 and ${flight.availableSeats}`;
    if (!passengerData.cardNumber || passengerData.cardNumber.replace(/\s/g, '').length !== 16) 
      newErrors.cardNumber = 'Valid card number is required';
    if (!passengerData.expiry || !/^\d{2}\/\d{2}$/.test(passengerData.expiry)) 
      newErrors.expiry = 'Valid expiry date (MM/YY) is required';
    if (!passengerData.cvv || passengerData.cvv.length !== 3) 
      newErrors.cvv = 'Valid CVV is required';
    if (!passengerData.cardName) newErrors.cardName = 'Name on card is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      const booking = onBooking(flight, passengerData);
      navigate('/confirm');
    }
  };

  if (!flight) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/search')}
        className="flex items-center text-blue-800 mb-6 hover:text-blue-600"
      >
        <FaArrowLeft className="mr-2" /> Back to Flights
      </button>
      
      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6">
              <h2 className="text-xl font-bold">Passenger Information</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaUser className="mr-2 text-blue-800" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={passengerData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-800" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={passengerData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaPhone className="mr-2 text-blue-800" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={passengerData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaCalendar className="mr-2 text-blue-800" /> Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={passengerData.dob}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaPassport className="mr-2 text-blue-800" /> Passport Number
                  </label>
                  <input
                    type="text"
                    name="passport"
                    value={passengerData.passport}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.passport ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="A12345678"
                  />
                  {errors.passport && <p className="text-red-500 text-sm mt-1">{errors.passport}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    name="seats"
                    value={passengerData.seats}
                    onChange={handleChange}
                    min="1"
                    max={flight.availableSeats}
                    className={`w-full p-3 border ${errors.seats ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.seats && <p className="text-red-500 text-sm mt-1">{errors.seats}</p>}
                  <p className="text-sm text-gray-500 mt-1">
                    Max {flight.availableSeats} seats available
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-bold mb-6">Payment Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FaCreditCard className="mr-2 text-blue-800" /> Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={passengerData.cardNumber}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="1234 5678 9012 3456"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={passengerData.expiry}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.expiry ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="MM/YY"
                    />
                    {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={passengerData.cvv}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="123"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={passengerData.cardName}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="John Smith"
                    />
                    {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button 
                  type="button"
                  onClick={() => navigate('/search')}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
            
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{flight.flightNumber}</span>
                <span className="font-semibold">{flight.origin} → {flight.destination}</span>
              </div>
              <div className="text-sm text-gray-600">
                {new Date(flight.departureTime).toLocaleDateString()} • {new Date(flight.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-3">
                <span>Flight Fare</span>
                <span>${flight.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Passengers (x{passengerData.seats || 1})</span>
                <span>${(flight.price * (passengerData.seats || 1)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Taxes & Fees</span>
                <span>$102.30</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Service Fee</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between pt-3 font-bold text-lg">
                <span>Total</span>
                <span>${((flight.price * (passengerData.seats || 1)) + 102.30 + 15.00).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;