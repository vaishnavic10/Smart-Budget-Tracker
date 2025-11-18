import React from "react";
import SummaryCard from "../components/SummaryCard/SummaryCard.jsx";
import BudgetProgress from "../components/BudgetProgress/BudgetProgress.jsx";
import SpendingChart from "../components/SpendingChart/SpendingChart.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Navbar FIXED */}
      <Navbar />

      <div className="dashboard-container">
        <h2 className="title">Dashboard Overview</h2>

        {/* Summary Cards */}
        <div className="summary-section">
          <SummaryCard title="Total Income" amount="₹75,000" type="income" />
          <SummaryCard title="Total Expenses" amount="₹45,000" type="expense" />
          <SummaryCard title="Remaining Balance" amount="₹30,000" type="balance" />
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <SpendingChart />
        </div>

        {/* Budget Section */}
        <h3 className="sub-title">Budget Breakdown</h3>
        <div className="budget-section">
          <BudgetProgress category="Food" spent={6000} limit={8000} />
          <BudgetProgress category="Travel" spent={3000} limit={5000} />
          <BudgetProgress category="Shopping" spent={9000} limit={10000} />
        </div>
      </div>

    </div>
  );
}
