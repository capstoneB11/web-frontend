import React, { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar, Line } from 'react-chartjs-2'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const TrackerPage = () => {
  // Bar Chart Data and Options
  const barChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Number of Chickens',
        data: [50, 60, 70, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Calendar
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-col lg:flex-row mt-4">
        <div className="w-full lg:w-1/2 pr-4">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold">Grafik Jumlah Ayam</h2>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-200 p-4 rounded-lg shadow flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold">Riwayat</h2>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
            <p>Selected Date: {selectedDate.toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
