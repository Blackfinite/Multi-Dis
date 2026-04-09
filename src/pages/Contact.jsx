import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white font-[Inter] flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">

        {/* Left: Contact Info */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 flex flex-col justify-start space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Information</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Reach out via any of the methods below or send a message using the form.
          </p>

          <div className="space-y-6 mt-4">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">123 Green Street, Lucknow, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-6 space-y-4">
              <div className="text-blue-600 text-5xl animate-bounce">✅</div>
              <p className="text-blue-600 text-xl font-semibold">Thank you!</p>
              <p className="text-gray-600 text-base text-center">
                Your message has been received. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-blue-200 shadow-inner text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                />
                <label className={`absolute left-4 transition-all
                  ${formData.name ? 'top-1 text-sm text-blue-500' : 'top-3 text-gray-400 text-lg'}
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500`}>
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-blue-200 shadow-inner text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                />
                <label className={`absolute left-4 transition-all
                  ${formData.email ? 'top-1 text-sm text-blue-500' : 'top-3 text-gray-400 text-lg'}
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500`}>
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-blue-200 shadow-inner text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent resize-none"
                />
                <label className={`absolute left-4 transition-all
                  ${formData.message ? 'top-1 text-sm text-blue-500' : 'top-3 text-gray-400 text-lg'}
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500`}>
                  Message
                </label>
              </div>

              <div className="text-center mt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-sm font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}