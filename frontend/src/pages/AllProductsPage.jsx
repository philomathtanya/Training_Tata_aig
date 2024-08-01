import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Product from "../components/Product";

export const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  async function fetchAllCartProductsPage() {
    const apidata = await axios.get("http://localhost:8000/go-to-cart");

    setCartProducts(apidata.data);
  }
  async function fetchAllProductsPage() {
    const apidata = await axios.get("http://localhost:8000/");

    setProducts(apidata.data);
  }
  const deleteHandler = (deletedProduct) => {
    const updatedProducts = products.filter(
      (item) => item._id !== deletedProduct._id
    );
    setProducts(updatedProducts);
  };
  const deleteCartHandler = (deletedProduct) => {
    const updatedCartProducts = cartProducts.filter(
      (item) => item._id !== deletedProduct._id
    );
    setCartProducts(updatedCartProducts);
  };
  useEffect(() => {
    fetchAllProductsPage();
  }, []);
  useEffect(() => {
    fetchAllCartProductsPage();
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
        {products.map((productInfo) => {
          return <Product product={productInfo} dlted={deleteHandler} dltCart={deleteCartHandler} />;
        })}
      </div>
    </div>
  );
};
