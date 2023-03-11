import "./App.css";
import Header from "./component/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./component/Fields";
import DeleteIcon from "@mui/icons-material/Delete";
// import Movie from "./component/Movie";
// import movies from "./movie.json";
// import Student from "./component/Student";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {name, email}]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {

  }

  // function inc(n) {
  //   setNum(num + n);
  // }

  // function dec(n) {
  //   setNum(num - n);
  // }
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
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>

        {/* {
          data.map((element, index) => {
            return (
              <Fields key={index} name={element.name} email={element.email} index={index} />
            )
          })
        } */}

      </div>

      {data.map((element, index) => {
        return (
          <div className="data_val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Stack>
              <Button onClick={() => removeItem(index)} variant="contained" color="error">
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        )
      })}

      {/* <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
          <button className="btn" onClick={inc}>increment</button>
          <button className="btn" onClick={dec}>decrement</button>
        </div> */}
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
      {/* </div> */}
    </div>
  );
}

export default App;
