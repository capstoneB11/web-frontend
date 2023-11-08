import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useUserToken from "../../hooks/useUserToken";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrackerPage = () => {
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
        label: "Number of Chickens",
        data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
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

  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
          <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold font-bold mb-2">
              Grafik Jumlah Ayam
            </h2>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Riwayat</h2>
            <Calendar value={selectedDate} onChange={handleDateChange} />
            <p>Selected Date: {selectedDate.toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
