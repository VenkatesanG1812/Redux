import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { PRODUCTS_URL } from "../constant";
import { useState } from "react";
import { add } from "../slices/cart";
import { useDispatch } from "react-redux";

export const Product = () => {
  const dispatch = useDispatch();
  const [inial, setval] = useState([]);
  const [Isloading, setLoading] = useState(true);
  const addtocart = (product) => {
    dispatch(add(product));
    // console.log(product);
  };
  useEffect(() => {
    getproduct();
  }, []);
  const getproduct = async () => {
    const res = await axios.get(PRODUCTS_URL);
    if (res.status == 200) {
      setval(res.data);
      setLoading(false);
    }
  };
  if (Isloading == true) return <div>Loading..;</div>;
  // const getproductfet = () => {
  //   return fetch(PRODUCTS_URL)
  //     .then((res) => res.json())
  //     .then((resp) => setval(resp));
  // };

  return (
    <div className="product">
      <h2>Shopping Card Application</h2>
      {inial.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <h4>Rs{product.price * 100}</h4>
          <button className="btn" onClick={() => addtocart(product)}>
            Add to card
          </button>
        </div>
      ))}
    </div>
  );
};
