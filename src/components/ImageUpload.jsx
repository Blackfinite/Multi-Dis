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
    <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-blue-100 space-y-4 max-w-xs mx-auto font-[Inter]">

      {/* Image Preview */}
      {image ? (
        <img
          src={image}
          alt="Preview"
          className="w-48 h-48 object-cover rounded-2xl shadow-md border border-blue-100 transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <div className="w-48 h-48 bg-blue-50 flex items-center justify-center rounded-2xl shadow-inner border-2 border-dashed border-blue-200 text-blue-400 font-semibold text-base transition-colors duration-300 hover:bg-blue-100">
          Image Preview
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      {/* File Input Button */}
      <label className="w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="cursor-pointer bg-blue-600 text-white text-base font-semibold py-2.5 px-4 rounded-xl text-center w-full shadow-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Upload Image
        </div>
      </label>

    </div>
  );
}