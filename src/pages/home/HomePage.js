import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import loader from "../../assets/loading-chicken.json";
import { useLocation } from "../../hooks/useLocation";
import { useImageCarousel } from "../../hooks/useImageCarousel";
import { useWeatherData } from "../../hooks/useWeatherData";
import { formatDate } from "../../utils/formatDate";
import Loader from "../../utils/Loader";

const HomePage = ({ userToken }) => {
  let content;
  const imageCarouselData = useImageCarousel();
  const userLocation = useLocation();
  const weatherData = useWeatherData(userLocation);
  const [selectedImage, setSelectedImage] = useState(0);

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  if (weatherData === null || imageCarouselData.length === 0) {
    content = (
      <div className="flex h-screen items-center justify-center">
        <Loader loaderOptions={loaderOptions} />;
      </div>
    );
  } else {
    content = (
      <div className="p-4">
        <h1 className="text-4xl font-bold">Hello Yazid!</h1>
        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <div className="bg-gray-200 p-4 h-full rounded-lg shadow">
              <h2 className="text-2xl font-bold">Hasil Prediksi</h2>
              <p className="text-sm italic">
                {today}, {weatherData.location.name},{" "}
                {weatherData.location.region}
              </p>
              <div className="flex items-center justify-center mt-2">
                <img
                  src={weatherData.current.condition.icon}
                  alt="Icon"
                  className="w-10 h-10"
                />
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
                      textSize: "36px",
                      textColor: "black",
                    })}
                  />
                </div>
                <p className="mt-2">Persentase Jumlah Ayam</p>
              </div>
              <ul className="mt-4">
                <li>Chickens that are alive: {275}</li>
                <li>Number of chickens that are dead: {25}</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-200 p-4 h-full rounded-md shadow">
              <h2 className="text-2xl font-bold">Foto Kandang</h2>

              <Carousel
                showThumbs={false}
                selectedItem={selectedImage}
                onChange={(index) => setSelectedImage(index)}
              >
                {imageCarouselData.map((image, index) => (
                  <div className="max-h-screen" key={index}>
                    <div className="w-full h-screen flex items-center justify center">
                      <img
                        src={`${image.image}`}
                        alt={`Image ${index}`}
                        className="w-full h-auto object-cover max-w-full"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
              <p>
                {`Gambar Diambil Pada: ${formatDate(
                  imageCarouselData[selectedImage].timestamp
                )}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default HomePage;
