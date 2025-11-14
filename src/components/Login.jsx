import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Login Function
  const handleLogin = (e) => {
    e.preventDefault();

    // Try to get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    // Case 1: No user found → redirect to Register page
    if (!savedUser) {
      alert("No user found! Please register first.");
      navigate("/register");
      return;
    }

    // Case 2: Wrong credentials
    if (savedUser.email !== email || savedUser.password !== password) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    // Case 3: Success → Redirect to Account page
    alert("Login successful!");
    navigate("/account");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2 w-100">
          Login
        </button>
      </form>

      <p className="text-center">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
