import React, { useState } from "react";
import DropzoneChild from "./DropzoneChild";
import Spinner from "../../utils/Spinner";
import useImagePrediction from "../../hooks/useImagePrediction";

const Dropzone = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { prediction, loading, error, uploadAndPredict } = useImagePrediction(
    "https://api.ultralytics.com/v1/predict/ipyo4cywDcA7LgB4Zy1n"
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

  return (
    <div className="flex items-center justify-center flex-col">
      {selectedImage ? (
        <div>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-64 lg:max-h-full"
          />
          <button
            onClick={() => uploadAndPredict(selectedImage)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 mt-4"
          >
            Predict Image
          </button>
          <button
            onClick={resetDropzone}
            className="w-full bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3 mt-2"
          >
            Remove Image
          </button>
        </div>
      ) : (
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

      {loading && <Spinner />}
      {error && <div>Error: {error}</div>}

      {prediction && (
        <div className="mt-4">
          <h2>Prediction Results:</h2>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
