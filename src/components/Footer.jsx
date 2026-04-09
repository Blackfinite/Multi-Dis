import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 py-8 font-[Inter] border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-900">
            Multi-Disease Prediction
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            &copy; 2026 All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <a href="/" className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors duration-300">
            Home
          </a>
          <a href="/about" className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors duration-300">
            About
          </a>
          <a href="/predictions" className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors duration-300">
            Predict
          </a>

          <a href="/contact" className="text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors duration-300">
            Contact Us
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-sm md:text-base">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50">
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
}