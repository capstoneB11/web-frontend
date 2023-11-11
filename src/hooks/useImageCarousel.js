import { useState, useEffect } from "react";
import Image from "../model/Image"; // Import the Image model

export function useImageCarousel(userToken, withFrame) {
  /** @type {Array<Image>} */
  const [imageCarouselData, setImageCarouselData] = useState([]);
  const [imageLoading, setLoading] = useState(true); // New loading stat

  useEffect(() => {
    setLoading(true);

    const URL = withFrame
      ? `https://www.chickcount.tech/api/getCount?uname=${userToken}`
      : `https://www.chickcount.tech/api/getImage?uname=${userToken}`;

    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.data) {
          // Map the JSON data to Image instances
          const images = responseData.data.map(
            (imageData) => new Image(imageData)
          );
          setImageCarouselData(images);
        } else {
          console.error('No "data" property in the JSON response');
        }
      })
      .catch((error) => console.error("Error fetching images:", error))
      .finally(() => {
        setLoading(false); // Set loading to false when the fetch is complete
      });
  }, [userToken, withFrame]);

  return { imageCarouselData, imageLoading };
}
