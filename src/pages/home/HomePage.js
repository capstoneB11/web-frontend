import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "../../hooks/useLocation";
import { useImageCarousel } from "../../hooks/useImageCarousel";
import { useWeatherData } from "../../hooks/useWeatherData";
import Loader from "../../utils/Loader";
import HomeCarousel from "../../components/dashboard/HomeCarousel";
import useUserToken from "../../hooks/useUserToken";
import { useChickenCount } from "../../hooks/useChickenCount";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Card from "../../components/dashboard/Card";
import Spinner from "../../utils/Spinner";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  let content;

  const [withFrame, setWithFrame] = useState(false);

  const userToken = useUserToken();

  const { imageCarouselData, imageLoading } = useImageCarousel(
    userToken,
    withFrame
  );
  const { chickenCount, countLoading } = useChickenCount(userToken);

  // Get the latest count and the count at the first timestamp
  const latestCount = chickenCount[chickenCount.length - 1]?.count || 0; // Latest count value
  const firstCount = chickenCount[0]?.count || 0; // Count value at the first timestamp

  // Calculating the difference in counts
  const deadChickenCount = firstCount - latestCount;

  const userLocation = useLocation();
  const weatherData = useWeatherData(userLocation);

  const date = new Date();
  const today = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const data = {
    labels: ["Ayam Mati", "Ayam Hidup"],
    datasets: [
      {
        label: "Jumlah",
        data: [deadChickenCount, latestCount], //Replace first index with deadChickenCount
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  if (weatherData === null || countLoading === true) {
    console.log(`USER TOKEN : ${userToken}`);

    content = (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  } else {
    content = (
      <div className="p-6 sm:px-10 sm:py-4">
        <h1 className="text-2xl sm:text-4xl font-medium text-white mt-6 mb-4 ">
          Hello, Peternak Yazid! 🧑🏻‍🌾
        </h1>
        <p className="text-xs sm:text-sm text-white italic text-start">
          {today}, {weatherData.location.name}, {weatherData.location.region}
        </p>
        <h1 className="mt-10 mb-4 text-3xl sm:text-4xl font-bold text-white">
          Dashboard{" "}
        </h1>
        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <Card className="flex flex-col p-12 h-full justify-between">
              <h2 className="text-2xl font-semibold text-center">
                Hasil Prediksi
              </h2>
              <Doughnut data={data} className="mt-8 scale-100 md:scale-75" />
            </Card>
          </div>

          <div className="w-full lg:w-1/2">
            <Card className="p-10 h-full flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Foto Kandang
              </h2>

              <div className="h-full flex justify-center items-center">
                {imageLoading && (
                  <div className="item-center">
                    <Spinner />
                    <p>Memuat Data Foto...</p>
                  </div>
                )}

                {!imageLoading && imageCarouselData && (
                  <div>
                    <HomeCarousel
                      imageCarouselData={imageCarouselData}
                      withFrame={withFrame}
                      setWithFrame={setWithFrame}
                    />
                  </div>
                )}

                {!imageLoading && imageCarouselData.length === 0 && (
                  <p>Belum Ada Data Foto</p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default HomePage;
