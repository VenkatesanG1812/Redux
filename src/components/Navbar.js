import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const cart = useSelector((state) => state.createSlice);
  // const com = useMemo(() => complexfun(cart.length), [cart.length]);
  function complexfun(len) {
    if (len <= 1) return 1;
    return complexfun(len - 1) * len;
  }

  return (
    <div className="navhome">
      <h2>Offer Zone</h2>
      <Link style={{ fontWeight: "bold", fontSize: "x-large" }} to="/">
        Home
      </Link>
      <Link style={{ fontWeight: "bold", fontSize: "x-large" }} to="/cart">
        Cart
      </Link>
      <div style={{ fontWeight: "bold" }}>Cart-Items: {cart.length}</div>
      {/* <div>Factorials {com}</div> */}
    </div>
  );
};
