import React from "react";
import { Product } from "../components/Product";
import { Search } from "../components/Search";
import { ProductThunk } from "..//components/ProdThunk";
export const Home = () => {
  return (
    <div>
      <h2 style={{ color: "#25757f", textAlign: "center" }}>
        Products in Offer
      </h2>
      {/* <Search /> */}
      <ProductThunk />
    </div>
  );
};
