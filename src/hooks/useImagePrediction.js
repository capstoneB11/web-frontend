import { useState } from "react";

const useImagePrediction = (modelEndpoint) => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadAndPredict = async (imageData) => {
    try {
      setLoading(true);

      const url = modelEndpoint;

      const jsonData = { image: imageData }; // Create an object with the image data

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      const result = await response.json();

      if (response.ok) {
        setPrediction(result);
      } else {
        // Handle error response
        console.error("Error:", result.message);
        console.log("Result : ", result);
        setError(result.message);
        setPrediction(null);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
      setPrediction(null);
    } finally {
      setLoading(false);
    }
  };

  return { prediction, loading, error, uploadAndPredict };
};

export default useImagePrediction;
