import React, { useState } from "react";
import DropzoneChild from "./DropzoneChild";
import Spinner from "../../utils/Spinner";
import useImagePrediction from "../../hooks/useImagePrediction";

const Dropzone = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { prediction, loading, error, uploadAndPredict } = useImagePrediction(
    "https://capstone-c501.as.r.appspot.com/demo"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const resetDropzone = () => {
    setSelectedImage(null);
    // No need to reset prediction, loading, and error as they are managed by the hook
  };

  const handlePredictClick = () => {
    // Check if an image is selected before making the prediction
    if (selectedImage) {
      // Convert the base64 image to a regular data URL
      const imageDataUrl = selectedImage.split(",")[1];
      uploadAndPredict(imageDataUrl);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {loading && (
        <div className="flex items-center flex-col">
          <Spinner />
          <h1>Model sedang Bekerja... 🐔 </h1>
        </div>
      )}

      {selectedImage && !loading && !prediction && (
        <div>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-64 lg:max-h-full"
          />
          <button
            onClick={handlePredictClick}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 mt-4"
          >
            Prediksi
          </button>
          <button
            onClick={resetDropzone}
            className="w-full bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3 mt-2"
          >
            Hapus Gambar
          </button>
        </div>
      )}

      {prediction && (
        <div className="mt-4">
          <h2 className="text-center font-semibold text-black py-4 text-2xl">
            Hasil Prediksi
          </h2>
          <p className="text-center font-semibold text-black mb-4 text-xl">
            Jumlah Ayam terdeteksi: {prediction.count}
          </p>
          <img
            src={prediction.image}
            alt="Predicted Image"
            className="max-w-full max-h-64 lg:max-h-full"
          />
        </div>
      )}

      {!selectedImage && !loading && !prediction && (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <DropzoneChild />
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}

      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default Dropzone;
