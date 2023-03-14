import "./App.css";
import Header from "./component/Header";
import { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Stack from "@mui/system/Stack";
// import AddIcon from "@mui/icons-material/Add";
// import Fields from "./component/Fields";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Movie from "./component/Movie";
// import movies from "./movie.json";
// import Student from "./component/Student";

function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  // const [state2, setState2] = useState(0);

  useEffect(() => {
    // console.log("useEffect Called");
    // window.alert("useEffect Called");
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=$
      {state}&idStarts=1001`);

        const res = await get.json();

        setData(res)
        // console.log(res);
    }

    getData();

    document.title = `(${state}) Employees Online`;

  });

  console.log("Function Body ");

  return (
    <div>
      <Header />
      {/* {console.log("Inside JSX")} */}
      <button onClick={() => setState(state+2)}>Click Me {state}</button>
      {
        data.map((element, index) => {
          return (
            <div className="data" key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
      {/* <button onClick={() => setState2(state2 + 1)}>Click Me {state2}</button> */}
    </div>
  );
}

export default App;
