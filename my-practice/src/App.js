import "./App.css";
import Header from "./component/Header";
import React, { useState } from "react";
// import Movie from "./component/Movie";
// import movies from "./movie.json";
// import Student from "./component/Student";

function App() {
  // let name = "Rutvik";

  // let login = false;

  // if (login == false) {
  //   return <h1>Rutvik Pramar</h1>
  // }

  return (
    <div className="App">
      {/* {
      login == false ? <Header /> : <div style={{color: "black"}}>Header</div>
    } */}

      {/* <h1>{name}</h1> */}
      {/* <Student 
        name="Rutvik" 
        age="19"
      /> */}

      {/* {
        (() => {
          if(login) {
            return <h1 style={{color: "black"}}>login</h1>
          } else if (login == 'name') {

          } else {
            return <h1 style={{color: "black"}}>login-page</h1>
          }
        })()
      } */}

      <Header />
      <div className="main">
      <h1 className="heading">1</h1>
      <div className="buttons">
        <button className="btn">increment</button>
        <button className="btn">decrement</button>
      </div>
        {/* {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default App;
