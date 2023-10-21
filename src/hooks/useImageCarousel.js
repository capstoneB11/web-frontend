// useImageCarousel.js
import { useState, useEffect } from 'react';

export function useImageCarousel() {
  const [imageCarouselData, setImageCarouselData] = useState([]);

  useEffect(() => {
    // Fetch images from the provided endpoint
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((data) => setImageCarouselData(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return imageCarouselData;
}
