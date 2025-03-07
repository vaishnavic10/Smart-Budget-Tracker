import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./styles/App.css"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;