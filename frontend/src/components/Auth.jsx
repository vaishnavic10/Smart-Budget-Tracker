import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css"; 

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => setIsSignup(!isSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

      <h2 className="auth-title">$Finance Growth$</h2>
<h4 className="auth-subtitle">Take control of your finances, effortlessly..!</h4>
        <form onSubmit={handleSubmit}>
          {isSignup && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? "Signup" : "Login"}</button>
        </form>
        <p onClick={toggleForm} className="toggle-text">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
        </p>
      </div>
    </div>
  );
};

export default Auth;