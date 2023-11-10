import React, { useState } from "react";
import DropzoneChild from "./DropzoneChild";

const Dropzone = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
  };

  return (
    <div className="flex items-center justify-center w-full">
      {selectedImage ? (
        // Render image preview if an image is selected
        <div>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-64"
          />
          <button
            onClick={resetDropzone}
            className="w-full bg-orange-4 text-white py-2 px-4 rounded hover:bg-orange-3 mt-4"
          >
            Hapus Gambar
          </button>
        </div>
      ) : (
        // Render dropzone if no image is selected
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
    </div>
  );
};

export default Dropzone;
