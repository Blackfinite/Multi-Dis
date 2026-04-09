import { Link } from "react-router-dom";
import { FaHeartbeat, FaLungs, FaMicroscope } from "react-icons/fa";

// 🔹 FEATURES DATA
const features = [
  {
    icon: FaHeartbeat,
    title: "Diabetes",
    description: "Predict diabetes risk using patient data with high accuracy",
  },
  {
    icon: FaLungs,
    title: "Pneumonia",
    description: "Detect lung infections instantly using chest X-ray images",
  },
  {
    icon: FaMicroscope,
    title: "Malaria",
    description: "Identify malaria parasites from blood smear images",
  },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-[Inter] overflow-x-hidden">

      {/* 🔹 HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 min-h-[83vh] md:min-h-[88vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-18 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

          {/* TEXT */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              AI-Based Multi Disease Prediction System
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Upload medical data or images and receive fast, intelligent predictions
              powered by machine learning models.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/predictions"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 hover:scale-105 transition"
              >
                Start Prediction
              </Link>

              <Link
                to="/about"
                className="bg-white border border-blue-200 text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg shadow-sm hover:bg-blue-50 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/hero.jpg"  // ✅ Use absolute path from public/
              alt="Medical AI"
              className="rounded-3xl shadow-xl w-full max-w-md md:max-w-md lg:max-w-md h-72 md:h-[380px] lg:h-[400px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

        </div>
      </section>
      
      {/* 🔹 FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          Our Prediction Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="bg-white border border-blue-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto flex items-center justify-center bg-blue-50 rounded-full mb-6">
                  <Icon className="text-blue-600 text-4xl" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}