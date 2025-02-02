// src/components/LoginPage.js
import React, { useState } from "react";
import "../styles/loginPage.css";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apidata = await axios.post("http://localhost:8000/login-user", {
      email,
      password,
    });
    console.log(apidata.data);
    try {
      if (apidata.data.status === "ok") {
        console.log("User found:", apidata.data.userList);
      navigate('/')
      } else {
        navigate('/register')
        console.log("User not found");
        
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  return (
    <div className="login">
      <div className="image-side1"></div>
      <div className="form-side">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
