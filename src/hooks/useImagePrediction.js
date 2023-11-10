import { useState } from "react";

const useImagePrediction = (modelEndpoint) => {
  const apiKey = process.env.REACT_APP_ULTRALYTICS_KEY;

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadAndPredict = async (imageData) => {
    try {
      setLoading(true);

      const url = modelEndpoint;
      const headers = {
        "x-api-key": apiKey,
      };
      const data = {
        size: 640,
        confidence: 0.25,
        iou: 0.45,
      };

      const formData = new FormData();
      formData.append("image", imageData);

      const response = await fetch(url, {
        mode: "no-cors",
        method: "POST",
        headers: headers,
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setPrediction(result);
      } else {
        // Handle error response
        console.error("Error:", result.message);
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
