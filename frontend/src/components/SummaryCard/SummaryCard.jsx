import React from "react";
import "./SummaryCard.css";

export default function SummaryCard({ title, amount, type }) {
  const colorMap = {
    income: "#2ecc71",
    expense: "#e74c3c",
    balance: "#3498db",
  };

  return (
    <div className="summary-card">
      <h4>{title}</h4>
      <h2 style={{ color: colorMap[type] }}>{amount}</h2>
    </div>
  );
}
