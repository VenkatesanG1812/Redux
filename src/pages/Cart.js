import React from "react";
import { remove } from "../slices/cart";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.createSlice);
  const dispatch = useDispatch();
  function Removefromcart(id) {
    dispatch(remove(id));
  }
  if (cart.length == 0) return <h2>Cart is empty</h2>;
  return (
    <div className="product">
      {cart.map((product) => (
        <div key={product.id} className="cartCard">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>

          <button className="btn" onClick={() => Removefromcart(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default Cart;
