import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shop Name and Address */}
        <div>
          <h2 className="text-xl font-bold mb-2">Maa Jagdamba Electronics</h2>
          <p>123 Electronics Market,</p>
          <p>City Center, Mumbai, India</p>
          <p>Pin Code: 400001</p>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Our Location</h2>
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.123456789!3d19.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b123456789%3A0x123456789abcdef!2sElectronics%20Market!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="150"
            className="rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact and Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> +91 9876543210
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> info@maajagdambaelectronics.com
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition"
              title="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
              title="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-center py-3">
        <p className="flex justify-center items-center gap-2">
          <FaCopyright /> 2025 Maa Gagdamba Electronics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;