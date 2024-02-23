import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "..//slices/myproduct";
import { add } from "../slices/cart";
import { status } from "..//slices/myproduct";

export const ProductThunk = () => {
  const dispatch = useDispatch();
  let { data: prod, status: S } = useSelector((state) => state.myproduct);
  const [search, setsearch] = useState("");
  const [searchresult, setsearchres] = useState(prod);
  const [starfilter, setstarfilter] = useState("all");

  const addtocart = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    console.log("getdata-useeffect=");
    dispatch(fetchdata());
  };
  useEffect(() => {
    handleSearch();
  }, [prod, search, starfilter]);
  const handleSearch = () => {
    console.log("first");
    if (search === "") {
      if (starfilter == "all") {
        console.log("understarfilter1");
        setsearchres(prod);
      } else {
        console.log("understarfilter2");
        let filterstart = prod.filter((item) => item.rating.rate >= starfilter);
        setsearchres(filterstart);
      }
    } else {
      let filterres = prod.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      if (starfilter == "all") {
        console.log("understarfilter1");
        setsearchres(filterres);
      } else {
        console.log("understarfilter2new");
        let filterstart = filterres.filter(
          (item) => item.rating.rate >= starfilter
        );
        setsearchres(filterstart);
      }
    }
  };

  //   console.log(searchresult);
  if (S === status.Load) return <div>Loading...</div>;
  if (S === status.fail) return <div>Failed to load</div>;

  let rupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  function handlestarfiler(event) {
    setstarfilter(event.target.value);
  }

  //   const handlehover = () => {};

  return (
    <div>
      <div className="filter">
        <div>
          <label htmlFor="search">Search Products</label>
          <input
            placeholder="searchproduct"
            id="search"
            value={search}
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          ></input>
        </div>

        {/* <button disabled={valsearch()} onClick={() => handleSearch()}>
        Search
      </button> */}
        <div>
          <label>filter</label>
          <select onChange={(event) => handlestarfiler(event)}>
            <option value="all">all</option>
            <option value="3">3★+</option>
            <option value="4">4★+</option>
          </select>
        </div>
      </div>
      <div className="product">
        {searchresult.map((product) => (
          <div
            key={product.id}
            className="card"
            // onMouseEnter={() => handlehover()}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <h4>{rupee.format(product.price * 100)}</h4>
            <div className="rating">
              <span>{product.rating.rate}</span>
              <span classNames="starimage">★</span>
            </div>

            <button className="btn" onClick={() => addtocart(product)}>
              Add to card
            </button>
          </div>
        ))}
      </div>
      {/* ) : (
  <div className="product">
    {prod.map((product, index) => (
      <div key={index} className="card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h4>{rupee.format(product.price * 50)}</h4>
        <button className="btn" onClick={() => addtocart(product)}>
          Add to card
        </button>
      </div>
    ))}
  </div>
)} */}
    </div>
  );
};
