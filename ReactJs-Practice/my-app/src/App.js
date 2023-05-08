import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Error from './Components/Error';
import Login from './Components/Login';
import {
  // Router,
  // Routes,
  // Route,
  createBrowserRouter,
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';

// import Movie from './Components/Movie';
// import movies from './movie.json';
// import { Stack } from '@mui/material';

// import Student from './Components/Student';

// function App() {

//   const [state, setState] = useState(2);
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   async function getData() {
//   //     const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords${state}&idStarts=1001`)

//   //     const res = await get.json();

//   //     setData(res)
//   //     console.log(res);
//   //   }
//   //   getData();

//   //   document.title = `(${state}) Online`;
//   //   // window.alert('useEffect Called');
//   // }, [state]);

//   // console.log("Function Body");


//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [data, setData] = useState([]);

//   // const addData = () => {
//   //   setData([...data, { name, email }]);
//   //   setName("");
//   //   setEmail("");
//   // }

//   // const removeBtn = (index) => {
//   //   let arr = data;
//   //   arr.splice(index, 1);
//   //   setData([...arr]);
//   // }

//   // const [num, setNum] = useState(0);

//   // function inc() {
//   //   setNum(num + 1)
//   // }

//   // function dec() {
//   //   setNum(num - 1)
//   // }

//   // let login = true;

//   // if (login == false) {

//   //   return (
//   //      <h1>Rutvik</h1>
//   //   )
//   // }

//   return (
//     <div className="App">
//       <Header />
//       <Home />

//       <Router>
//         <Routes>
//           {/* Home */}
//           <Route path='/' element={<Home />} />

//           {/* About */}
//           <Route path='/about' element={<About />} />

//           {/* Contact */}
//           <Route path='/contact' element={<Contact />} />

//           <Route path='*' element={<Error />} />

//         </Routes>
//       </Router>

//       {/* {console.log("inside JSX")} */}

//       {/* <button onClick={() => setState2(state2 + 1)}>Click Me {state2}</button> */}
//       {/* <br />
//       <div className='form'>
//         <Stack direction="row" spacing={2}>
//           <TextField
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//           />
//           <TextField
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             id="outlined-basic"
//             label="Eamil"
//             variant="outlined"
//           />
//           <Button onClick={addData} variant="contained" color='error'>
//             <AddIcon />
//           </Button>
//         </Stack>
//       </div>

//       <div className='data'>
//         <div className='data-1'>
//           <h4>Name</h4>
//           <h4>Email</h4>
//           <h4>Remove</h4>
//         </div>

//         {
//           data.map((element, index) => {
//             return (
//               <div key={index} className='data-1'>
//                 <h4>{element.name}</h4>
//                 <h4>{element.email}</h4>
//                 <Stack>
//                   <Button onClick={() => removeBtn(index)} color='error'>
//                     <DeleteIcon style={{ fontSize: "50px" }} />
//                   </Button>
//                 </Stack>
//               </div>
//             )
//           })
//         }

//       </div>

//       <div className='main'>
//         <div className='main-2'>
//           <h1 className='heading'>{num}</h1>
//           <div className='buttons'>
//             <button className='btn' onClick={inc}>Increment</button>
//             <button className='btn' onClick={dec}>decrement</button>
//           </div>
//         </div>
//       </div> */}

//       {/* {
//         (() => {
//           if(login) {
//             return <h1 style={{color: 'black'}}>Rutvik</h1>
//           } else {
//             return <h1 style={{color: 'black'}}>Rutvik</h1>
//           }
//         })
//       }

//       <Header />

//       <div className='main'>
//         {
//           movies.map((element, index) => {     
//             return(
//               <Movie
//                 key={index}
//                 title={element.Title}
//                 year={element.Year}
//                 img={element.Poster}
//               />
//             )       
//           })
//         }
//       </div> */}

//       {/* <Student 
//         name="Rutvik"
//         age={20}
//       /> */}
//     </div>
//   );
// }

<Header />
const App = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);
export default App;
