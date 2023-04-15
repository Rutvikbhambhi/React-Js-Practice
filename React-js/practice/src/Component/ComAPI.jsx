import React, { useEffect, useState } from "react";
import axios from "axios";

const ComAPI = () => {
  const [num, setNum] = useState();
  const [brand, setBrand] = useState();
  const [stock, setstock] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://dummyjson.com/products/${num}`);
      console.log(res.data);
      setBrand(res.data.brand);
      setstock(res.data.images.length);
    }

    getData();
  });
  return (
    <div>
      <h1 style={{ color: "white" }}>
        You Choose <span style={{ color: "red" }}>{num} Value</span>
      </h1>
      <h1 style={{ color: "white" }}>
        My Brand is<span style={{ color: "red" }}> {brand}</span>
      </h1>
      <h1 style={{ color: "white" }}>
        Mobile <span style={{ color: "red" }}>{stock} Stock </span>
      </h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default ComAPI;
