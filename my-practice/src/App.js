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

  useEffect(() => {
    // const []

    console.log("useEffect Called");
  })

  console.log("Function Body");

  return (
    <div>
      <Header />
      {console.log("Inside Jsx")}
    </div>
  );
}

export default App;
