import { useEffect, useState } from 'react';

export function useWeatherData(userLocation) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (userLocation) {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      const cleanApiKey = API_KEY.replace(/["'`]/g, ''); // This will remove single and double quotes.
      const weatherAPIURL = `http://api.weatherapi.com/v1/current.json?key=${cleanApiKey}&q=${userLocation.lat},${userLocation.lon}&aqi=no`;
      
      fetch(weatherAPIURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(API_KEY)
          setWeatherData(data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [userLocation]);

  return weatherData;
}