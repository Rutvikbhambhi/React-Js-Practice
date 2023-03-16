import React from "react";
// import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { Inc, Dec } from "./states/reducers/index";

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
        {/* <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>{curState}</h1>
        <div>
          <button onClick={() => dispatch(Inc(10))}>Inc</button>
          <button onClick={() => dispatch(Dec(5))}>Dec</button>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default App;
