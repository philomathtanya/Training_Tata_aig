import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export const Form = ({ heading, onSubmit }) => {
  const name = useRef();
  const price = useRef();
  const img = useRef();
  const desc = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Price = price.current.value;
    const Name = name.current.value;
    const Img = img.current.value;
    const Desc = desc.current.value;
    onSubmit({
      Name,
      Price,
      Img,
      Desc,
    });
  };

  return (
    <div className="container m-5">
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Write Product's Name:
          </label>
          <input
            type="text"
            ref={name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Write Product's Price:
          </label>
          <input
            type="number"
            ref={price}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Write Product's Imange Url:
          </label>
          <input
            type="text"
            ref={img}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Write Product's Description:
          </label>
          <input
            type="text"
            ref={desc}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-danger w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
