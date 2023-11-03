import { useEffect, useState } from 'react';

export function useWeatherData(userLocation) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (userLocation) {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      const weatherAPIURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userLocation.lat},${userLocation.lon}&aqi=no`;

      fetch(weatherAPIURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [userLocation]);

  return weatherData;
}