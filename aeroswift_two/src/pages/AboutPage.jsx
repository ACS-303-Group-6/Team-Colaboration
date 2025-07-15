// src/pages/AboutPage.jsx
import React from 'react';
import { FaShieldAlt, FaHeart, FaLeaf, FaPlane } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About AeroSwift</h1>
        <p className="text-xl text-gray-600">
          Discover our story, values, and commitment to revolutionizing air travel.
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2010, AeroSwift has grown from a regional carrier to one of the most trusted 
              airlines in the industry. Our mission is to connect people and cultures through seamless 
              air travel experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a fleet of over 120 modern aircraft and serving more than 90 destinations worldwide, 
              we're committed to safety, comfort, and environmental sustainability.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-800">12M+</div>
                <div className="text-sm text-gray-600">Passengers</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-800">90+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-800">120</div>
                <div className="text-sm text-gray-600">Aircraft</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-blue-100 rounded-xl w-full h-64 flex items-center justify-center">
              <FaPlane className="text-blue-800 text-8xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Our Values</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These core principles guide everything we do at AeroSwift
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShieldAlt className="text-blue-800 text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-3">Safety First</h3>
          <p className="text-gray-600">
            Our top priority is the safety and security of our passengers and crew.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaHeart className="text-green-600 text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
          <p className="text-gray-600">
            We're dedicated to providing exceptional service at every touchpoint.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaLeaf className="text-teal-600 text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-3">Sustainability</h3>
          <p className="text-gray-600">
            Committed to reducing our environmental impact through innovation.
          </p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join the AeroSwift Family</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the difference with our award-winning service and commitment to excellence.
        </p>
        <button className="bg-white text-blue-800 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
          Book Your Flight
        </button>
      </div>
    </div>
  );
};

export default AboutPage;