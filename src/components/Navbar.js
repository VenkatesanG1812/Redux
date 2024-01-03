import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cart = useSelector((state) => state.createSlice);
  const com = useMemo(() => complexfun(cart.length), [cart.length]);
  function complexfun(len) {
    if (len <= 1) return 1;
    return complexfun(len - 1) * len;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>Redux S</span>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/cart">
        Cart
      </Link>
      <div>Cart Count is {cart.length}</div>
      <div>Factorial {com}</div>
    </div>
  );
};
