import React, { useState } from "react";
import "../styles/registerPage.css";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apidata = await axios.post("http://localhost:8000/register-user", {
      email,
      name,
      password
    });
    try {
      if (apidata.data.status === "ok")
        console.log("user registered successfully");
      // navigate('/');
    } catch {
      console.log("User not registered");
    }
  };

  return (
    <div className="login">
      <div className="image-side"></div>
      <div className="form-side">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="login-title">Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
