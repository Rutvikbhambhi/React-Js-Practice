
import './App.css';
// import { useState } from 'react';
// import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Effect from './Components/Hooks/Effect';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Users from './Components/Users';
import Pure from './Components/Hooks/Pure';
import State from './Components/Hooks/State';
import Ref from './Components/Hooks/Ref';
import Context from './Components/Hooks/Context';
import Reducer from './Components/Hooks/Reducer';
import Memo from './Components/Hooks/Memo';
import Create from './Components/CrudOperation/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './Components/CrudOperation/Read';


function App() {
  // Lifting State Up
  // let data="Rutvik";
  function parentAlert(data){
    alert(data.name)
    console.log(data);
  }


  
  // const student = ['Rutvik', 'Rahul', 'Aditya', 'Meet'];
  // const users = [

  // Reuse Component With List

  //   {
  //     name: 'Rutvik', email: 'rutvik@gmail.com', contact: '6654636554'
  //   },
  //   {
  //     name: 'Rahul', email: 'rahul@gmail.com', contact: '6654636554'
  //   },
  //   {
  //     name: 'Aditya', email: 'aditya@gmail.com', contact: '6654636554'
  //   },
  //   {
  //     name: 'Vijay', email: 'vijay@gmail.com', contact: '6654636554'
  //   }
    // {
    //   name: "Rutvik", email: "rutvik@gmail.com", address: [
    //     { Hn: "10", city: "Noida", country: "India" },
    //     { Hn: "30", city: "Gurgaon", country: "India" },
    //     { Hn: "43", city: "Delhi", country: "India" },
    //     { Hn: "90", city: "Noida", country: "India" }
    //   ]
    // },
    // {
    //   name: "Meet", email: "meet@gmail.com", address: [
    //     { Hn: "10", city: "Noida", country: "India" },
    //     { Hn: "30", city: "Gurgaon", country: "India" },
    //     { Hn: "43", city: "Delhi", country: "India" },
    //     { Hn: "90", city: "Noida", country: "India" }
    //   ]
    // },
    // {
    //   name: "Rahul", email: "rahul@gmail.com", address: [
    //     { Hn: "10", city: "Noida", country: "India" },
    //     { Hn: "30", city: "Gurgaon", country: "India" },
    //     { Hn: "43", city: "Delhi", country: "India" },
    //     { Hn: "90", city: "Noida", country: "India" }
    //   ]
    // },
    // {
    //   name: "Aditya", email: "aditya@gmail.com", address: [
    //     { Hn: "10", city: "Noida", country: "India" },
    //     { Hn: "30", city: "Gurgaon", country: "India" },
    //     { Hn: "43", city: "Delhi", country: "India" },
    //     { Hn: "90", city: "Noida", country: "India" }
    //   ]
    // },
  // ]

  // const student = [
  //   { name: "Rutvik", email: "rutvik@gmail.com", contact: "9694946448" },
  //   { name: "Rahul", email: "rahul@gmail.com", contact: "989452448" },
  //   { name: "Aditya", email: "aditya@gmail.com", contact: "9995846748" }
  // ]

  // // map looping
  // student.map((item) => {
  //   console.log("My Name is:", item);
  // });

  // for (let i = 0; i < student.length; i++) {
  //   console.warn("In for loop My Name is:", student[i]) 
  // }


  // const [data, setData] = useState(null)
  // const [print, setPrint] = useState(false)

  // function getData(val) {
  // function getData() {
  // console.log("Added");
  // console.warn(val.target.value);
  // setData(val.target.value)
  // setPrint(false)
  // }
  // function increment() {
  //   setData(data+1)  
  // }
  // function decrement() {
  //   setData(data-1)  
  // }

  // const [name, setName] = useState("Rutvik");


  // const [name, setName] = useState("");
  // const [tnc, setTnc] = useState(false);
  // const [interest, setinterest] = useState("");
  // function getFormData(e) {
  //   e.preventDefault()
  //   console.log(name, interest, tnc);
  // }

  return (
    <div className="App">

    {/* CrudOperation */}
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route exact path='/read' element={<Read />} />
      </Routes>
    </BrowserRouter>



      {/* <h1>Lifting State Up</h1>
      <Users alert={parentAlert} /> */}

      {/* <Pure /> */}
      {/* <Ref /> */}

      {/* Hooks */}
      
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <Context /> */}
      {/* <Reducer /> */}
      {/* <Memo /> */}
      {/* <Login /> */}

      {/* <h1>Reuse Component With List</h1> */}
      {/* {
        users.map((item, i) =>
          <Users data={item} />
        )
      } */}
      {/* <h2>Handle Array with List</h2>
      <Table variant='dark' striped>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>

        {
          users.map((item, i) =>
            // item.contact === '9995846748' ?
            <tr key={i} style={{backgroundColor:'black'}}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant='dark' striped>
                  <tbody>
                    {
                      item.address.map((data) =>
                        <tr>
                          <td>{data.Hn}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </td>
            </tr>
          )
        }
      </Table> */}


      {/* <table border={1} align='center'>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
          student.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        }
      </table> */}
      {/* <Button className='btn btn-warning'>Primary</Button>{' '} */}
      {/* <Users data={getData} /> */}
      {/* <Members data={getData} /> */}
      {/* {
        print ?
          <h1>{data}</h1>
          : null
      } */}
      {/* <button onClick={increment}>Click Me</button> */}
      {/* <button onClick={decrement}>Click Me</button> */}
      {/* <Users
      name={name} 
      age={10}
      email={"meet@gmail.com"}
      other={{address: 'khedbrahma', mobile: "5674964658"}}
      /> */}

      {/* <button onClick={()=>{setName("meet")}}>Update Name</button> */}

      {/* <input type="text" onChange={getData} /> */}
      {/* <button onClick={() => setPrint(true)}>Print</button> */}

      {/* <div className='from'>
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}>
          <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/> 
          <br /><br />
          <select onChange={(e) => setinterest(e.target.value)}>
            <option>select</option>
            <option>Spider Man</option>
            <option>Iron Man</option>
            <option>Super Man</option>
          </select> 
          <br /><br />
          <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} />
          <span>Accept Terms and conditions</span>
          <br /><br />
          <button type='submit'>Submit</button>
        </form>
      </div> */}
    </div >
  );
}

export default App;
