// useLocation.js
import { useState, useEffect } from 'react';

export function useLocation() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(`ACQUIRED LOCATION : ${position.coords.latitude} ${position.coords.longitude}`);
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.log('LOCATION FETCH FAILED');
    }
  }, []);

  return userLocation;
}
