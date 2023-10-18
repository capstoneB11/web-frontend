import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {

  const date = new Date()
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

  const [imageCarouselData, setImageCarouselData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch images from the provided endpoint
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((data) => setImageCarouselData(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const API_KEY = 'bced9e4d1e5246d899c84953231710';
      const location = `${userLocation.lat},${userLocation.lon}`;
      const weatherAPIURL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

      // Fetch weather data from the WeatherAPI
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

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Hello Yazid!</h1>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 pr-4">
          <h2 className="text-2xl font-bold">Hasil Prediksi</h2>
          <div className="bg-gray-200 p-4 h-screen rounded-lg shadow">
            <p className="text-sm italic">{today}, {weatherData.location.name}, {weatherData.location.region}</p>
            <div className="flex items-center justify-center mt-2">
              <img src={weatherData.current.condition.icon} alt="Icon" className="w-10 h-10" />
              <div className="ml-2 mt-4 text-xl">
                <p>Weather: {weatherData.current.condition.text}</p>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <div style={{ width: 300, height: 300 }}>
                <CircularProgressbar
                  value={95}
                  text={`${95}%`}
                  styles={buildStyles({
                    textSize: '36px',
                    textColor: 'black',
                  })}
                />
              </div>
              <p className='mt-2'>Persentase Jumlah Ayam</p>
            </div>
            <ul className="mt-4">
              <li>Chickens that are alive: {275}</li>
              <li>Number of chickens that are dead: {25}</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold">Foto Kandang</h2>
          <div className="bg-gray-200 p-4 rounded-md shadow">
          <Carousel
            showThumbs={false}
            selectedItem={selectedImage}
            onChange={(index) => setSelectedImage(index)}
          >
            {imageCarouselData.map((image, index) => (
            <div className='max-h-screen' key={index}>
              <div className='w-full h-screen flex items-center justify center'>
                <img 
                  src={image.download_url}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(0.8)' }} />
              </div>
            </div>                  
            ))}
          </Carousel>
          <p>Date: puqqy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
