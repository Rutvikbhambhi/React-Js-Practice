import React, { useEffect, useState } from "react";
import axios from "axios";

const ComAPI = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://dummyjson.com/products/${num}`);
      console.log(res.data);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }

    getData();
  });
  return (
    <div>
      <h1 style={{color: "white"}}>You Choose <span style={{ color: "red" }}>{num} Value</span></h1>
      <h1 style={{color: "white"}}>My Name is<span style={{ color: "red" }}>{name}</span></h1>
      <h1 style={{color: "white"}}>I have <span style={{ color: "red" }}>{moves} Moves</span></h1>
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
