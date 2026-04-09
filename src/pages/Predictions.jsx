import { useState } from "react";
import { FaHeartbeat, FaLungs, FaMicroscope } from "react-icons/fa";
import ImageUpload from "../components/ImageUpload";
import PredictionCard from "../components/PredictionCard";

const diseases = [
  { id: "diabetes", name: "Diabetes", description: "Predict diabetes risk" },
  { id: "pneumonia", name: "Pneumonia", description: "Predict lung infection" },
  { id: "malaria", name: "Malaria", description: "Predict malaria from blood smear" },
];

export default function Predictions() {
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Dummy prediction function (no backend required)
  const handlePredict = async () => {
    if (!file || !selectedDisease) return;
    setLoading(true);

    // simulate prediction delay
    await new Promise((res) => setTimeout(res, 1000));

    // set fake result
    setResult({
      disease: selectedDisease.name,
      confidence: (Math.random() * 100).toFixed(2) + "%",
    });

    setLoading(false);
  };

  if (!selectedDisease) {
    const diseaseIcons = {
      diabetes: <FaHeartbeat className="text-blue-600 w-10 h-10 mb-2" />,
      pneumonia: <FaLungs className="text-blue-600 w-10 h-10 mb-2" />,
      malaria: <FaMicroscope className="text-blue-600 w-10 h-10 mb-2" />,
    };

    return (
      <div className="p-6 max-w-4xl mx-auto font-[Inter] bg-white">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-gray-900 leading-snug">
          Select a Disease
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {diseases.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer flex flex-col items-center text-center"
              onClick={() => setSelectedDisease(d)}
            >
              {diseaseIcons[d.id]}

              <h2 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900 leading-snug">
                {d.name}
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-snug">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto font-[Inter] bg-white">
      <button
        className="mb-3 text-blue-600 font-semibold hover:underline text-sm transition-colors duration-300"
        onClick={() => {
          setSelectedDisease(null);
          setFile(null);
          setResult(null);
        }}
      >
        ← Back to Diseases
      </button>

      <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center text-gray-900 leading-snug">
        {selectedDisease.name} Prediction
      </h1>

      <div className="flex justify-center items-center min-h-[250px]">
        {!result ? (
          <div className="w-full max-w-xs bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex flex-col items-center">
            <ImageUpload onUpload={setFile} />

            <button
              onClick={handlePredict}
              className="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-lg shadow-sm font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-base"
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