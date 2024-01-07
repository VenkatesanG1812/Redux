import React, { useState } from "react";
import { ProductThunk } from "./ProdThunk";
export const Search = () => {
  console.log("component");
  function Sea(event) {
    setval(event.target.value);
  }
  // const sea = debounce(sea, 200);
  const [searval, setval] = useState("");
  return (
    <div>
      <div className="center">
        <label for="input-id">Search product</label>
        <input
          type="text"
          name="input-name"
          id="input-id"
          placeholder="search"
          onChange={(event) => {
            Sea(event);
          }}
        />
        <h2>Search value {searval}</h2>
      </div>
    </div>
  );
};
