import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Predictions", path: "/predictions" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 w-full fixed top-0 left-0 z-50 shadow-sm border-b border-blue-100 font-[Inter]">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
          Multi-Disease Predictor
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 pb-4 text-sm bg-white/80 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}