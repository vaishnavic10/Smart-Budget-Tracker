import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link to="/dashboard" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Home;
