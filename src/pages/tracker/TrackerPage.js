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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrackerPage = () => {
  let content;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const userToken = useUserToken();

  // Function to generate random data for the chart
  const generateRandomData = (days) => {
    const labels = Array.from({ length: days }, (_, i) => `Day ${i + 1}`);
    const data = Array.from({ length: days }, () =>
      Math.floor(Math.random() * 100)
    );
    return { labels, data };
  };

  // Initialize the bar chart data with default values
  const initialDays = 7; // Default number of days
  const { labels, data } = generateRandomData(initialDays);

  const [barChartData, setBarChartData] = useState({
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

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Function to handle date change in the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);

    const options = {
      year: "numeric",
      month: "long", // Use 'long' for the full month name, or 'short' for the abbreviated name
      day: "numeric",
    };

    // Format the date in Indonesian style
    const formattedDate = date.toLocaleDateString("id-ID", options);

    const days = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24)); // Calculate days
    const { labels, data } = generateRandomData(days);
    setBarChartData({
      labels,
      datasets: [
        {
          label: "Number of Chickens",
          data,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  content = (
    <div className="p-6 sm:p-10">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">Statistik</h1>

      <div className="w-full mb-4 mt-4">
        <Card className="p-4 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl font-bold font-bold mb-2 mt-4">
            Grafik Jumlah Ayam
          </h2>
          <Bar className="p-16" data={barChartData} options={barChartOptions} />
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
          <Card className="p-4 flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
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
          <Card className="p-4 flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Tabel Riwayat Prediksi
            </h2>
            <div className="w-full h-full bg-gray-400"></div>
          </Card>
        </div>
      </div>
    </div>
  );

  return content;
};

export default TrackerPage;
