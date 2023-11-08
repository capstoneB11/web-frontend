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
import useUserToken from "../../hooks/useUserToken";

const HomePage = () => {
  let content;

  const [withFrame, setWithFrame] = useState(false);

  const userToken = useUserToken();
  const imageCarouselData = useImageCarousel(userToken, withFrame);
  const userLocation = useLocation();
  const weatherData = useWeatherData(userLocation);

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

  if (weatherData === null) {
    console.log(`USER TOKEN : ${userToken}`);

    content = (
      <div className="flex h-screen items-center justify-center">
        <Loader loaderOptions={loaderOptions} />
      </div>
    );
  } else {
    content = (
      <div className="p-6 sm:p-10 bg-gradient-to-b from-gradient-1 to-gradient-2">
        <h1 className="text-3xl sm:text-4xl font-medium text-white mt-6 mb-4 ">
          Hello, Peternak Yazid! 🧑🏻‍🌾
        </h1>
        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <div className="flex flex-col bg-white p-10 h-full rounded-2xl shadow-2xl justify-between">
              <h2 className="text-2xl font-semibold text-center">
                Hasil Prediksi
              </h2>
              <p className="text-sm italic text-center">
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
              <ul className="mt-4 text-center">
                <li>Ayam hidup: {275}</li>
                <li>Ayam mati: {25}</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-10 h-full rounded-2xl shadow-2xl flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-center">
                Foto Kandang
              </h2>

              {imageCarouselData.length === 0 ? (
                <p>Belum Ada Data Foto</p>
              ) : (
                <div>
                  <HomeCarousel
                    imageCarouselData={imageCarouselData}
                    withFrame={withFrame}
                    setWithFrame={setWithFrame}
                  />
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
