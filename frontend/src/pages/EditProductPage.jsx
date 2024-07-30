import React from "react";
import { Form } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export  const EditProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  async function onSubmit(data) {
    const apidata = await axios.put(
      `http://localhost:8000/Edit-product/${params.id}`,
      data
    );
    navigate("/");
  }

  return <Form heading="Edit Product Details" onSubmit={onSubmit} />;
};


