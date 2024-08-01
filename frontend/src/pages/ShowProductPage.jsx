import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ShowProductPage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const params = useParams();
  const id = params.id;
  async function gettingIdData() {
    const data = await axios.get(`http://localhost:8000/product/${id}`);
    setSingleProduct(data.data);
  }
  useEffect(() => {
    gettingIdData();
  }, []);

  return (
    <div>
      <div className="card mt-5 container" style={{ width: "30%" }}>
        <div className="card-header">Product</div>
        <div className="card-body ">
          <blockquote className="blockquote mb-0">
            <p>{singleProduct.name}</p>
            <div style={{ padding: "1rem", flex: "1" }}>
              <img
                src={singleProduct.img}
                alt="Product"
                style={{
                  width: "100%",
                  height: "auto",
                  borderBottom: "1px solid #ddd",
                }}
              />
              <p>{singleProduct.name}</p>
              <footer style={{ marginTop: "1rem" }}>
                <cite title="Source Title">{singleProduct.price}</cite>
                <p>{singleProduct.desc}</p>
              </footer>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/edit-product/${id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <Link to={`/addtocart/${id}`}>
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </Link>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
