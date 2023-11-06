import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import loader from "../../assets/loading-chicken-2.json";
import { useLocation } from "../../hooks/useLocation";
import { useImageCarousel } from "../../hooks/useImageCarousel";
import { useWeatherData } from "../../hooks/useWeatherData";
import Loader from "../../utils/Loader";
import HomeCarousel from "../../components/dashboard/HomeCarousel";
import ReactSwitch from "react-switch";

const HomePage = () => {
  let content;

  const userToken = localStorage.getItem("userToken").toString();

  const [withFrame, setWithFrame] = useState(false);

  const imageCarouselData = useImageCarousel(userToken, withFrame);
  const userLocation = useLocation();
  const weatherData = useWeatherData(userLocation);

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const toggleFrame = () => {
    setWithFrame(!withFrame); // Toggle the state of withFrame when the switch button is clicked
  };

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  if (weatherData === null) {
    console.log(`USER TOKEN : ${userToken}`);

    content = (
      <div className="flex h-screen items-center justify-center">
        <Loader loaderOptions={loaderOptions} />
      </div>
    );
  } else {
    content = (
      <div className="p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Hello Yazid!</h1>
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
                <div style={{ width: 225, height: 225 }}>
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      textSize: "36px",
                      textColor: "black",
                    })}
                    className="scale-75 md:scale-100"
                  />
                </div>
                <p className="sm:mt-2 ">Persentase Jumlah Ayam</p>
              </div>
              <ul className="mt-4">
                <li>Ayam hidup: {275}</li>
                <li>Ayam mati: {25}</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-200 p-4 h-full rounded-md shadow">
              <h2 className="text-2xl font-bold">Foto Kandang</h2>

              {imageCarouselData.length === 0 ? (
                <p>Belum Ada Data Foto</p>
              ) : (
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <ReactSwitch
                      onChange={toggleFrame}
                      checked={withFrame}
                      onColor="#86d3ff"
                      onHandleColor="#2693e6"
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                    />
                    <span
                      className={`text-sm font-medium ${
                        withFrame ? "text-indigo-600" : "text-gray-600"
                      }`}
                    >
                      Tunjukkan Frame
                    </span>
                  </label>

                  <HomeCarousel imageCarouselData={imageCarouselData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default HomePage;
