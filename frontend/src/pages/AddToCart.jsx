import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

export const AddToCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);
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
        {cartProducts.map((productInfo) => {
          return <Product product={productInfo}  dltCart={deleteCartHandler} dlted={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

