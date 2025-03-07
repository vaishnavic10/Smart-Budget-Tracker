import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Finance Manager</h2>
        <nav>
          <ul>
            <li><Link to="/home"><FaHome /> Home</Link></li>
            <li><Link to="/profile"><FaUser /> Profile</Link></li>
            <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome to your dashboard!</h1>
      </main>
    </div>
  );
};

export default Dashboard;
