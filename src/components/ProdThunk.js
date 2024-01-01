import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "..//slices/myproduct";
import { add } from "../slices/cart";
import { status } from "..//slices/myproduct";
export const ProductThunk = () => {
  const dispatch = useDispatch();
  const { data: prod, status: S } = useSelector((state) => state.myproduct);
  console.log(typeof status);
  const addtocart = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    dispatch(fetchdata());
  };

  if (S === status.Load) return <div>Loading...</div>;
  if (S === status.fail) return <div>Failed to load</div>;
  return (
    <div className="product">
      {prod.map((product) => (
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
