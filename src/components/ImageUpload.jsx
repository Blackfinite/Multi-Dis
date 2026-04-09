import { useState } from "react";

export default function ImageUpload({ onUpload }) {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(""); // Validation errors

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed!");
      setImage(null);
      return;
    }

    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File size should be less than 5MB");
      setImage(null);
      return;
    }

    setError("");
    setImage(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-blue-100 space-y-4 max-w-xs sm:max-w-sm md:max-w-md mx-auto font-[Inter]">

      {/* Image Preview */}
      {image ? (
        <img
          src={image}
          alt="Preview"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover rounded-2xl shadow-md border border-blue-100 transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-blue-50 flex items-center justify-center rounded-2xl shadow-inner border-2 border-dashed border-blue-200 text-blue-400 font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-blue-100 text-center">
          Image Preview
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs sm:text-sm md:text-base text-center">{error}</p>
      )}

      {/* File Input Button */}
      <label className="w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="cursor-pointer bg-blue-600 text-white text-sm sm:text-base md:text-lg font-semibold py-2.5 sm:py-3 md:py-3 px-4 sm:px-6 rounded-xl text-center w-full shadow-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Upload Image
        </div>
      </label>

    </div>
  );
}