import { useEffect, useState } from 'react';

export function useWeatherData(userLocation) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (userLocation) {
      const API_KEY = 'bced9e4d1e5246d899c84953231710';
      const weatherAPIURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userLocation.lat},${userLocation.lon}&aqi=no`;

      fetch(weatherAPIURL)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [userLocation]);

  return weatherData;
}