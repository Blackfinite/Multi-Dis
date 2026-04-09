import React from "react";
import { FaHeartbeat, FaLungs, FaMicroscope } from "react-icons/fa";

// 🔹 HIGHLIGHTS DATA
const highlights = [
  {
    icon: FaHeartbeat,
    title: "Accurate Predictions",
    description:
      "Our AI models provide precise detection of multiple diseases using advanced medical image analysis.",
  },
  {
    icon: FaLungs,
    title: "Fast & Efficient",
    description:
      "Receive predictions instantly to support healthcare professionals in making timely decisions.",
  },
  {
    icon: FaMicroscope,
    title: "User-Friendly Interface",
    description:
      "A clean, intuitive design ensures accessibility for both technical and non-technical users.",
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-[Inter]">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 text-gray-900 min-h-[83vh] md:min-h-[88vh] flex items-center">
        
        {/* ✅ Mobile spacing fixed only */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

          {/* Text */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            
            {/* ✅ Mobile text size fixed */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
              About Our AI Prediction System
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-gray-600 leading-relaxed">
              Harnessing cutting-edge AI to analyze medical images, our system delivers accurate and reliable disease predictions.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Designed to empower healthcare professionals with actionable insights and efficient workflows.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/homePage.jpg"
              alt="Medical AI About"
              className="rounded-3xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-md h-56 sm:h-64 md:h-[340px] lg:h-[370px] object-cover hover:scale-105 transform transition duration-300"
            />
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-16 md:py-24">
        
        {/* ✅ Mobile heading fixed */}
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-900">
          Why Choose Our System
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-blue-100 shadow-sm p-6 sm:p-7 md:p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-3 transform transition cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center bg-blue-50 rounded-full mb-4 sm:mb-6">
                  <Icon className="text-blue-600 text-3xl sm:text-4xl" />
                </div>

                <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 sm:mb-3 leading-relaxed text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}