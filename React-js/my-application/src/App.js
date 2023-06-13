
import Users from './Users';
import './App.css';
import { useState } from 'react';


function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value)
    setPrint(false)
  }
  // function increment() {
  //   setData(data+1)  
  // }
  // function decrement() {
  //   setData(data-1)  
  // }

  // const [name, setName] = useState("Rutvik");
  return (
    <div className="App">
      {
        print ?
          <h1>{data}</h1>
          : null
      }
      {/* <button onClick={increment}>Click Me</button> */}
      {/* <button onClick={decrement}>Click Me</button> */}
      <Users
      // name={name} 
      // age={10}
      // email={"meet@gmail.com"}
      // other={{address: 'khedbrahma', mobile: "5674964658"}}
      />
      {/* <button onClick={()=>{setName("meet")}}>Update Name</button> */}

      {/* <input type="text" onChange={getData} /> */}
      {/* <button onClick={() => setPrint(true)}>Print</button> */}
    </div >
  );
}

export default App;
