
import React from "react";
import { Line } from "react-chartjs-2";
import "./SpendingChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);
export default function SpendingChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Spending",
        data: [12000, 14500, 10000, 18000, 16000, 14000],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>Monthly Spending Analysis</h3>
      <Line data={data} />
    </div>
  );
}
