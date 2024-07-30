import React from "react";
import { Form } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export  const AddProductPage = () => {
  const navigate = useNavigate();

  async function onSubmit(data) {
    const apidata = await axios.post("http://localhost:8000/addQuotes", data);
    navigate("/");
  }


  return <Form heading="Add New product" onSubmit={onSubmit} />;
};

