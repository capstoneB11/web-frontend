// useImageCarousel.js
import { useState, useEffect } from "react";

export function useImageCarousel(userToken, withFrame) {
  const [imageCarouselData, setImageCarouselData] = useState([]);

  useEffect(() => {
    const URL = withFrame
      ? `https://www.chickcount.tech/api/getCount?uname=${userToken}`
      : `https://www.chickcount.tech/api/getImage?uname=${userToken}`;

    // Fetch images from the provided endpoint
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        // Check if the "data" property exists in the JSON response
        if (responseData.data) {
          console.log(`DATA 1 ${JSON.stringify(responseData.data[0].image)}`);
          setImageCarouselData(responseData.data);
        } else {
          console.error('No "data" property in the JSON response');
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [userToken, withFrame]);

  return imageCarouselData;
}
