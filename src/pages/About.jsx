import React from "react";
import { FaHeartbeat, FaLungs, FaMicroscope } from "react-icons/fa";
import aboutImage from "../assets/homePage.jpg";

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
        <div className="max-w-7xl mx-auto px-6 py-18 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              About Our AI Prediction System
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-600 leading-relaxed">
              Harnessing cutting-edge AI to analyze medical images, our system delivers accurate and reliable disease predictions.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Designed to empower healthcare professionals with actionable insights and efficient workflows.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="Medical AI About"
              className="rounded-3xl shadow-xl w-full max-w-sm md:max-w-md lg:max-w-md h-60 md:h-[340px] lg:h-[370px] object-cover hover:scale-105 transform transition duration-300"
            />
          </div>

        </div>
      </section>

      {/* Highlights / Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose Our System
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-blue-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-3 transform transition cursor-pointer"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                  <Icon className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl md:text-xl font-semibold mb-3 leading-relaxed text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
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