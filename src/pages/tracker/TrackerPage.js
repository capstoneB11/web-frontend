import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import format from "date-fns/format";
import id from "date-fns/locale/id"; // Import the Indonesian locale

import { Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useUserToken from "../../hooks/useUserToken";
import Card from "../../components/dashboard/Card";
import Loader from "../../utils/Loader";
import { useChickenCount } from "../../hooks/useChickenCount";
import HistoryTable from "../../components/dashboard/HistoryTable";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrackerPage = ({ userToken }) => {
  const { chickenCount, countLoading } = useChickenCount(userToken);

  let content;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Jumlah Ayam",
        data: [],
        backgroundColor: "rgba(255, 151, 26, 0.2)",
        borderColor: "rgba(255, 151, 26, 1)",
        borderWidth: 1,
      },
    ],
  });

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const today = new Date(); // Today's date
    // const selected = new Date(date); // Selected date

    const filteredData = chickenCount.filter((data) => {
      const dataDate = new Date(data.timestamp);
      return dataDate >= date && dataDate <= today;
    });

    filteredData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)); // Sort by date

    const labels = filteredData.map((data) => {
      // Format the label based on the date (you can adjust this based on your preferences)
      const dataDate = new Date(data.timestamp);
      return format(dataDate, "dd MMMM yyyy", { locale: id }); // Using date string as an example
    });

    const data = filteredData.map((data) => data.count);

    setBarChartData({
      labels,
      datasets: [
        {
          label: "Jumlah Ayam",
          data,
          backgroundColor: "rgba(255, 151, 26, 0.2)",
          borderColor: "rgba(255, 151, 26, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  if (countLoading) {
    content = (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  } else {
    content = (
      <div className="p-6 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-medium text-white mt-6 mb-4 ">
          Hello, Peternak Yazid! 🧑🏻‍🌾
        </h1>
        <h1 className="text-white text-3xl sm:text-4xl font-bold">Statistik</h1>

        <div className="w-full mb-4 mt-4">
          <Card className="p-4 flex flex-col items-center justify-center">
            <h2 className="text-md sm:text-2xl font-bold font-bold mb-2 sm:mt-4">
              Grafik Jumlah Ayam
            </h2>
            {barChartData.labels.length === 0 ||
            barChartData.datasets[0].data.length === 0 ? (
              <div>
                <p>
                  Tidak ada perhitungan pada hari yang dipilih. Coba Pilih hari
                  lain 😀
                </p>
              </div>
            ) : (
              <Bar
                className="px-4 lg:p-20"
                data={barChartData}
                options={barChartOptions}
              />
            )}
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row mt-4">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
            <Card className="p-4 flex flex-col items-center justify-center h-full">
              <h2 className="text-md sm:text-2xl font-bold mb-2">
                Pilih Riwayat Prediksi
              </h2>
              <Calendar value={selectedDate} onChange={handleDateChange} />
              <p>
                Tanggal terpilih sejak:{" "}
                {format(selectedDate, "dd MMMM yyyy", { locale: id })}
              </p>
            </Card>
          </div>
          <div className="w-full lg:w-1/2">
            <Card className="p-4 h-full">
              <h2 className="text-xl text-center sm:text-2xl font-bold mb-2">
                Tabel Riwayat Prediksi
              </h2>
              <div className="flex flex-col items-center justify-center h-full">
                {barChartData.labels.length === 0 ||
                barChartData.datasets[0].data.length === 0 ? (
                  <div>
                    <p>
                      Tidak ada perhitungan pada hari yang dipilih. Coba Pilih
                      hari lain 😀
                    </p>
                  </div>
                ) : (
                  <HistoryTable
                    selectedDate={selectedDate}
                    chickenCount={chickenCount}
                  />
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

export default TrackerPage;
