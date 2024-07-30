import React, { useEffect } from "react";
import Quote from "../components/quote";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const AllProductsPage = () => {
  const [Quotes, setQuotes] = useState([]);

  async function fetchAllProductsPage() {
    const apidata = await axios.get("http://localhost:8000/");

    setQuotes(apidata.data);
  }
  const deleteHandler = (deletedquote) => {
    const updatedQuotes = Quotes.filter(
      (item) => item._id !== deletedquote._id
    );
    setQuotes(updatedQuotes);
  };

  useEffect(() => {
    fetchAllProductsPage();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {Quotes.map((quote) => {
          return <Quote quote={quote} dlted={deleteHandler} />;
        })}
      </div>
    </div>
  );
};


