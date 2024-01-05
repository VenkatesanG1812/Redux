import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "..//slices/myproduct";
import { add } from "../slices/cart";
import { status } from "..//slices/myproduct";
export const ProductThunk = () => {
  const [search, setsearch] = useState("");
  const [searchresult, setsearchres] = useState([]);
  const dispatch = useDispatch();
  let { data: prod, status: S } = useSelector((state) => state.myproduct);

  const addtocart = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    dispatch(fetchdata());
  };

  const handleSearch = () => {
    console.log(search);

    let filterres = prod.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setsearchres(filterres);
    console.log(filterres);
  };
  if (S === status.Load) return <div>Loading...</div>;
  if (S === status.fail) return <div>Failed to load</div>;

  return (
    <div>
      <label for="search">Search Product</label>
      <input
        placeholder="search"
        id="search"
        value={search}
        onChange={(event) => setsearch(event.target.value)}
      ></input>
      <button onClick={() => handleSearch()}>Search</button>
      <div className="product">
        {searchresult.length > 0 ? (
          searchresult.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <h4>Rs{product.price * 100}</h4>
            </div>
          ))
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
};
