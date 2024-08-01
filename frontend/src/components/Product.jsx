import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [iconVisible, setIconVisible] = useState(true);
  async function deleteProduct(id) {
    const data = await axios.delete(`http://localhost:8000/delete/${id}`);
    const newProduct = data.data.deletedproduct;
    props.dlted(newProduct);
  }
  async function deleteCartProduct(id) {
    const data = await axios.delete(`http://localhost:8000/remove-from-cart/${id}`);
    const newProduct = data.data.deletedproduct;
    props. dltCart(newProduct);
  }
  async function addCartProduct(product) {
    const data = await axios.post(`http://localhost:8000/add-to-cart`, product);
    console.log(data);
  }
  function deleteHandler(id) {
    deleteProduct(id);
  }
  function deleteCartHandler(id) {
    setIconVisible(!iconVisible);
    deleteCartProduct(id);
  }
   function cartHandler(product) {
    setIconVisible(!iconVisible);
     addCartProduct(product);
  }
  return (
    <div
      style={{
        width: "400px",
        border: "0.2px solid grey",
        borderRadius: "16px",
      }}
    >
      <div style={{ padding: "1rem", flex: "1" }}>
        <img
          src={props.product.img}
          alt="Product"
          style={{
            width: "100%",
            height: "200px",
            borderBottom: "1px solid #ddd",
            objectFit: "cover",
          }}
        />
        <p>{props.product.name}</p>
        <footer style={{ marginTop: "1rem" }}>
          <cite title="Source Title">{props.product.price}</cite>
          <p>{props.product.desc}</p>
        </footer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
          alignItems: "center",
          padding: "0px 10px ",
        }}
      >
        <Link to={`/show-product/${props.product._id}`}>
          <button style={{ margin: "0 0.5rem" }} className="btn btn-primary">
            Show
          </button>
        </Link>
        <FontAwesomeIcon
          icon={faTrash}
          style={{ fontSize: "20px", color: "grey" }}
          onClick={() => deleteHandler(props.product._id)}
        />
       
        {iconVisible ?  <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: "20px", color: "grey" }}
            onClick={() => cartHandler(props.product)}
          /> :  <FontAwesomeIcon
          icon={faCartFlatbed}
          style={{ fontSize: "20px", color: "grey" }}
          onClick={() => deleteCartHandler(props.product._id)}
        />}
         
     
      </div>
    </div>
  );
};

export default Product;
