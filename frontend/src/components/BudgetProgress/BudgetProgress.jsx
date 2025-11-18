import React from "react";
import "./BudgetProgress.css";

export default function BudgetProgress({ category, spent, limit }) {
  const percentage = (spent / limit) * 100;

  return (
    <div className="budget-card">
      <h4>{category}</h4>
      <p>₹{spent} / ₹{limit}</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            background: percentage > 75 ? "#e74c3c" : "#3498db",
          }}
        ></div>
      </div>
    </div>
  );
}
