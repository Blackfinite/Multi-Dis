export default function PredictionCard({ result }) {
  if (!result) return null;

  const confidencePercentage = (result.confidence * 100).toFixed(2);

  return (
    <div className="mt-4 p-4 bg-white rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl transform hover:-translate-y-1 transition-all max-w-xs mx-auto min-h-[350px] flex flex-col justify-between font-[Inter]">

      {/* Title */}
      <h2 className="text-xl font-extrabold mb-4 text-gray-900 text-center">
        Prediction Result
      </h2>

      {/* Disease Info */}
      <div className="mb-4 text-center">
        <p className="text-base text-gray-700 font-semibold mb-1 leading-snug">
          Disease
        </p>
        <p className="text-xl text-blue-600 font-bold leading-snug">
          {result.disease}
        </p>
      </div>

      {/* Confidence Info */}
      <div className="mb-4 text-center">
        <p className="text-base text-gray-700 font-semibold mb-1 leading-snug">
          Confidence
        </p>
        <p className="text-xl text-blue-600 font-bold leading-snug">
          {confidencePercentage}%
        </p>
      </div>

      {/* Confidence Progress Bar */}
      <div className="w-full bg-blue-100 rounded-full h-4 overflow-hidden mt-1">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
          style={{ width: `${confidencePercentage}%` }}
        />
      </div>
    </div>
  );
}