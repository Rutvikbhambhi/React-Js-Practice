import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
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

import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Error from "./component/Error";
import Insta from "./component/Insta";
import Mail from "./component/Mail";
import Userdetails from "./component/Userdetails";

function App() {
  // const [state, setState] = useState(2);
  // const [data, setData] = useState([]);
  // const [state2, setState2] = useState(0);

  // useEffect(() => {
  // console.log("useEffect Called");
  // window.alert("useEffect Called");
  //   async function getData() {
  //     const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=$
  //     {state}&idStarts=1001`);

  //       const res = await get.json();

  //       setData(res)
  //       // console.log(res);
  //   }

  //   getData();

  //   document.title = `(${state}) Employees Online`;

  // });

  // console.log("Function Body ");

  return (
    <Router>
      <div>
        <Header />
        {/* <Home /> */}
        <Routes>
          {/* Home */}
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="/userId" element={<Userdetails />} />
            <Route path="/app" element={<Home />} />
          </Route>

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />}  >
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
            </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>

    /* <div>
      {console.log("Inside JSX")}
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
      <button onClick={() => setState2(state2 + 1)}>Click Me {state2}</button>
    </div> */
  );
}

export default App;
