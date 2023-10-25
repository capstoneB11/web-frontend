// useImageCarousel.js
import { useState, useEffect } from 'react';

export function useImageCarousel() {
  const [imageCarouselData, setImageCarouselData] = useState([]);

  useEffect(() => {
    // Fetch images from the provided endpoint
    fetch('https://be-git-fork-capstoneb11-main-yzdnaufan.vercel.app/api/getImage?all=true')
      .then((response) => response.json())
      .then((responseData) => {
        // Check if the "data" property exists in the JSON response
        if (responseData.data) {
          console.log(`DATA 1 ${JSON.stringify(responseData.data[0].timestamp)}`);
          setImageCarouselData(responseData.data);
        } else {
          console.error('No "data" property in the JSON response');
        }
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return imageCarouselData;
}

