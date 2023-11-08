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
import { useChickenCount } from "../../hooks/useChickenCount";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  let content;

  const [withFrame, setWithFrame] = useState(false);

  const userToken = useUserToken();

  const imageCarouselData = useImageCarousel(userToken, withFrame);
  const chickenCount = useChickenCount(userToken);

  const latestCountIndex = chickenCount.length - 1; // Last index

  const latestCount = chickenCount[latestCountIndex]; // Value at the last index
  const firstCount = chickenCount[0];

  const deadChickenCount = firstCount - latestCount;

  const userLocation = useLocation();
  const weatherData = useWeatherData(userLocation);

  const date = new Date();
  const today = new Intl.DateTimeFormat("id-ID", {
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

  const data = {
    labels: ["Ayam Mati", "Ayam Hidup"],
    datasets: [
      {
        label: "Jumlah",
        data: [firstCount, firstCount], //Replace first index with deadChickenCount
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
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
        <h1 className="text-3xl sm:text-4xl font-medium text-white mt-6 mb-4 ">
          Hello, Peternak Yazid! 🧑🏻‍🌾
        </h1>
        <p className="text-sm text-white italic text-start">
          {today}, {weatherData.location.name}, {weatherData.location.region}
        </p>
        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <div className="flex flex-col bg-white p-12 h-full rounded-2xl shadow-2xl justify-between">
              <h2 className="text-2xl font-semibold text-center">
                Hasil Prediksi
              </h2>
              <Doughnut data={data} className="mt-8 scale-75 md:scale-100" />
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
