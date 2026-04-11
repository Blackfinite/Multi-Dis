import { useState } from "react";
import { FaLungs, FaVirus, FaBrain } from "react-icons/fa";
import ImageUpload from "../components/ImageUpload";
import PredictionCard from "../components/PredictionCard";

// 🔹 UPDATED DISEASES
const diseases = [
  {
    id: "pneumonia",
    name: "Pneumonia",
    description: "Detect lung infections using chest X-ray images",
    icon: FaLungs,
  },
  {
    id: "covid",
    name: "COVID-19",
    description: "Identify COVID-19 infection from X-ray or CT scans",
    icon: FaVirus,
  },
  {
    id: "brain",
    name: "Brain Tumor",
    description: "Detect brain tumors using MRI scan analysis",
    icon: FaBrain,
  },
];

export default function Predictions() {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Dummy prediction function
  const handlePredict = async () => {
    if (!file || !selectedDisease) return;
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000));

    setResult({
      disease: selectedDisease.name,
      confidence: (Math.random() * 100).toFixed(2) + "%",
    });

    setLoading(false);
  };

  // 🔹 DISEASE SELECTION SCREEN
  if (!selectedDisease) {
    return (
      <div className="p-6 max-w-4xl mx-auto font-[Inter] bg-white">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-gray-900">
          Select a Disease
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {diseases.map((d) => {
            const Icon = d.icon;

            return (
              <div
                key={d.id}
                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer flex flex-col items-center text-center"
                onClick={() => setSelectedDisease(d)}
              >
                {/* ICON */}
                <Icon className="text-blue-600 w-10 h-10 mb-2" />

                {/* TITLE */}
                <h2 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900">
                  {d.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm md:text-base">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 🔹 PREDICTION SCREEN
  return (
    <div className="p-4 max-w-3xl mx-auto font-[Inter] bg-white">
      <button
        className="mb-3 text-blue-600 font-semibold hover:underline text-sm"
        onClick={() => {
          setSelectedDisease(null);
          setFile(null);
          setResult(null);
        }}
      >
        ← Back to Diseases
      </button>

      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center text-gray-900">
        {selectedDisease.name} Prediction
      </h1>

      <div className="flex justify-center items-center min-h-[250px]">
        {!result ? (
          <div className="w-full max-w-xs bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center">
            <ImageUpload onUpload={setFile} />

            <button
              onClick={handlePredict}
              className="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-lg shadow-sm font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        ) : (
          <div className="w-full max-w-xs">
            <PredictionCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
}