import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 font-[Inter] border-t border-blue-100 mt-4 w-full">
      
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 md:px-6 md:py-6">
        
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-3 sm:gap-4">

          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-base md:text-2xl font-extrabold text-gray-900">
              Multi-Disease Prediction
            </h1>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              &copy; 2026 All rights reserved.
            </p>
          </div>

          {/* Horizontal Links */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-base mt-1 md:mt-0">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/predictions" className="hover:text-blue-600 transition">
              Predict
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
            <a href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition">
              <FaFacebookF className="text-xs md:text-base" />
            </a>
            <a href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition">
              <FaTwitter className="text-xs md:text-base" />
            </a>
            <a href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition">
              <FaLinkedinIn className="text-xs md:text-base" />
            </a>
            <a href="#" className="p-1.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition">
              <FaInstagram className="text-xs md:text-base" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}