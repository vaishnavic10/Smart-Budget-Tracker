import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import "./Settings.css";

// Professional Icons
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsMoonStars, BsBell } from "react-icons/bs";

export default function Settings() {
  const [formData, setFormData] = useState({
    username: "Vaishnavi Chopade",
    email: "vaishnavichopade316@gmail.com",
    currency: "INR",
    language: "English",
    notifications: true,
    darkMode: false,
    monthlyBudget: "50000",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all settings?")) {
      setFormData({
        username: "",
        email: "",
        currency: "INR",
        language: "English",
        notifications: true,
        darkMode: false,
        monthlyBudget: "",
      });
    }
  };

  return (
    <div className="settings-page">
      <Navbar />

      <div className="settings-container">
        <h2 className="title">Settings</h2>

        <div className="settings-content">

          {/* Profile Section */}
          <div className="settings-card">
            <div className="card-header">
              <div className="header-icon">
                <AiOutlineUser size={26} />
              </div>
              <h3>Profile Information</h3>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="settings-card">
            <div className="card-header">
              <div className="header-icon">
                <FiSettings size={26} />
              </div>
              <h3>Preferences</h3>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label htmlFor="currency">Currency</label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="monthlyBudget">Monthly Budget Limit</label>
                <input
                  type="number"
                  id="monthlyBudget"
                  name="monthlyBudget"
                  value={formData.monthlyBudget}
                  onChange={handleChange}
                  placeholder="Enter monthly budget"
                />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="settings-card">
            <div className="card-header">
              <div className="header-icon">
                <IoNotificationsOutline size={26} />
              </div>
              <h3>Notifications & Display</h3>
            </div>

            <div className="card-body">
              <div className="toggle-group">

                {/* Email Notifications */}
                <div className="toggle-item">
                  <div className="toggle-info">
                    <label>Email Notifications</label>
                    <p>Receive budget alerts and updates</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={formData.notifications}
                      onChange={handleChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                {/* Dark Mode */}
                <div className="toggle-item">
                  <div className="toggle-info">
                    <label>Dark Mode</label>
                    <p>Enable dark theme for better visibility</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      name="darkMode"
                      checked={formData.darkMode}
                      onChange={handleChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save Changes
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset Settings
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
