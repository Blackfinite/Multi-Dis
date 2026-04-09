import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-800 px-6 py-3 w-full fixed top-0 left-0 z-50 shadow-sm border-b border-blue-100 font-[Inter]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo / Brand */}
        <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors">
          Multi-Disease Predictor
        </h1>

        {/* Links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">
            Home
          </Link>
          <Link to="/predictions" className="hover:text-blue-600 transition-colors duration-300">
            Predictions
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}