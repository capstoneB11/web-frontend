import { useState, useEffect } from "react";
import Image from "../model/Image"; // Import the Image model

export function useImageCarousel(userToken, withFrame) {
  /** @type {Array<Image>} */
  const [imageCarouselData, setImageCarouselData] = useState([]);

  useEffect(() => {
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
      .catch((error) => console.error("Error fetching images:", error));
  }, [userToken, withFrame]);

  return imageCarouselData;
}
